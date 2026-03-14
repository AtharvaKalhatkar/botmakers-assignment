# Full Stack Authentication & RBAC System

A full-stack web application with JWT-based authentication and Role-Based Access Control (RBAC).

## Tech Stack

**Backend:** Java 17, Spring Boot, Spring Security, JWT, H2 Database, Swagger  
**Frontend:** React, TypeScript, Vite, TailwindCSS, Axios, React Hook Form

## Features

- User Registration with role selection (USER / ADMIN)
- JWT based login authentication
- Role-based dashboard (USER sees user content, ADMIN sees both)
- Protected routes on frontend
- Swagger API documentation

## Project Structure

botmakers-assignment/
├── loginpage-backend/    # Spring Boot backend
└── loginpage-frontend/   # React frontend


## How to Run Backend

1. Open `loginpage-backend` in VS Code
2. Make sure Java 17 is installed
3. Run in terminal:

./mvnw spring-boot:run

4. Backend runs on `http://localhost:8083`
5. Swagger UI: `http://localhost:8083/swagger-ui/index.html`

## How to Run Frontend

1. Open `loginpage-frontend` in VS Code
2. Run in terminal:

npm install
npm run dev

3. Frontend runs on `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/auth/register | Public |
| POST | /api/auth/login | Public |
| GET | /api/public | Public |
| GET | /api/user | USER + ADMIN |
| GET | /api/admin | ADMIN only |

## Test Credentials

USER:
- Email: atharva@gmail.com
- Password: 123456

ADMIN:
- Email: admin@gmail.com
- Password: 123456