import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch() // Catch all types of exceptions
export class GlobalExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger('ExceptionsFilter');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | object = 'Internal server error';
    let dbErrorCode: string | null = null;

    // 1. Handle TypeORM / PostgreSQL Errors
    if (exception instanceof QueryFailedError) {
      const dbError = exception as any;
      status = HttpStatus.BAD_REQUEST;
      dbErrorCode = dbError.code;

      // Log database errors to the server console for debugging
      this.logger.error(
        `Database Error [${dbError.code}]: ${dbError.detail || dbError.message}`,
      );

      switch (dbError.code) {
        case '23505': // Unique violation (e.g., duplicate slug or email)
          message = `Duplicate entry: ${dbError.detail}`;
          break;
        case '23503': // Foreign key violation
          message = `Constraint violation: ${dbError.detail}`;
          break;
        case '22P02': // Invalid input syntax (e.g., malformed UUID)
          message =
            'Invalid data format (e.g., invalid UUID or numeric format)';
          break;
        case '23502': // Not null violation
          message = `Missing required field: ${dbError.column}`;
          break;
        default:
          // For unknown DB errors, we keep it as Internal Server Error for security
          status = HttpStatus.INTERNAL_SERVER_ERROR;
          message = 'A database error occurred';
      }
    }

    // 2. Handle NestJS Built-in HttpExceptions (NotFound, Unauthorized, etc.)
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();

      // Extract the message from NestJS response object
      message = typeof res === 'object' ? (res as any).message : res;
    }

    // 3. Unexpected Errors (General Programming Errors)
    else {
      this.logger.error('Unexpected Exception:', exception);
    }

    // Standardized API response
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
      // Only include dbCode in development or if it's a known DB error
      ...(dbErrorCode && { dbCode: dbErrorCode }),
    });
  }
}
