# Nest E-commerce API

A **scalable RESTful API** for an e-commerce platform built with **NestJS** and **TypeScript**. This project focuses on implementing a robust backend using **TypeORM** and **PostgreSQL**, following clean architecture principles.

The goal of this project is to provide a solid foundation for an online store, handling products, users, and orders efficiently.

This API uses **PostgreSQL** as its relational database and is fully containerized with **Docker** for easy development.

## Table of Contents

* [Requirements](#requirements)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Environment Variables](#environment-variables)
* [Available Scripts](#available-scripts)
* [License](#license)
* [Author](#author)

## Requirements

To run this project, you need to have the following installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or any other editor of your choice.

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Docker Desktop](https://img.shields.io/badge/Docker%20Desktop-2496ED.svg?style=flat&logo=docker&logoColor=white)](https://www.docker.com/products/docker-desktop/)

> [!NOTE]
> It is highly recommended to use the **Node.js LTS version**. Docker Desktop is required to lift the PostgreSQL database easily without local installations.

Check your installations by running:

```bash
node --version
npm --version
docker --version
docker compose version
```

## Tech Stack

This project utilizes the following technologies:

<p>
  <a href="#"><img src="https://skillicons.dev/icons?i=nestjs" width="40" height="40" alt="NestJS" /></a>
  <a href="#"><img src="https://skillicons.dev/icons?i=ts" width="40" height="40" alt="TypeScript" /></a>
  <a href="#"><img src="https://skillicons.dev/icons?i=docker" width="40" height="40" alt="Docker" /></a>
  <a href="#"><img src="https://skillicons.dev/icons?i=postgres" width="40" height="40" alt="PostgreSQL" /></a>
</p>

**TypeORM:** Object-Relational Mapper for TypeScript and JavaScript.

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/daniel-pompa/nest-teslo-shop.git
```

2. **Navigate to the project directory:**

```bash
cd nest-teslo-shop
```

3. **Install dependencies:**

```bash
npm install
```

4. **Setup environment variables**

Copy the template file to create your local environment config:

```bash
cp .env.example .env
```

Modify the `.env` file with your desired database credentials.

5. **Install Nest CLI:**

```bash
npm install -g @nestjs/cli
```

6. **Start local infrastructure using Docker**

Lift the PostgreSQL database container:

```bash
docker compose up -d
```

7. **Run the development server:**

```bash
npm run start:dev
```

> [!NOTE]
> By default, the API will be available at <http://localhost:3000>

## Environment variables

The project requires the following variables defined in your `.env` file to establish a connection with the PostgreSQL database:

| Variable | Description | Example Value |
| :--- | :--- | :--- |
| `DB_NAME` | Name of the PostgreSQL database | `nest-teslo-db` |
| `DB_USER` | Database administrative user | `postgres` |
| `DB_PASSWORD` | Password for the DB user | `your password` |
| `DB_HOST` | Hostname or IP address of the database | `localhost` |
| `DB_PORT` | Port number of the database | `5432` |

> [!IMPORTANT]
> Make sure to create your `.env` file from the `.env.template` before starting the Docker containers to ensure the database is initialized with the correct credentials.

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run start:dev` | Starts the application in development mode with hot-reload. |
| `npm run build` | Compiles the application into the `dist` directory. |
| `npm run start:prod` | Runs the compiled application in production mode. |
| `npm run lint` | Runs ESLint to detect and fix code style issues. |

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

> [!NOTE]
> Clicking on the MIT License badge to see the LICENSE file for details.

## Author

This project is maintained and developed by **Daniel Pompa Pareja**.

[⬆️ Back to Top](#table-of-contents)
