# Task Management API

A REST API for managing tasks, built with Node.js, Express, and TypeScript.

## Tech Stack

- Node.js
- Express
- TypeScript
- Zod
- ESLint
- Prettier

## Project Structure

```text
src/
├── controllers/
├── middleware/
├── repositories/
├── routes/
├── schemas/
├── services/
├── types/
└── utils/
```

The application follows a layered architecture:

```text
Routes
  ↓
Controllers
  ↓
Services
  ↓
Repositories
```

## Installation

Install the dependencies:

```bash
npm install
```

## Build

Compile the TypeScript code:

```bash
npm run build
```

## Run

Start the API:

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a task |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |
| PATCH | `/tasks/:id/assign` | Assign a task to a user |

## Create a Task

**POST** `/tasks`

Example request:

```json
{
  "title": "Learn Express",
  "description": "Understand REST API",
  "dueDate": "2026-09-10"
}
```

A new task is created with `completed` set to `false`.

## Update a Task

**PATCH** `/tasks/:id`

Example request:

```json
{
  "completed": true
}
```

Task fields such as title, description, due date, and completion status can be updated.

## Assign a Task

**PATCH** `/tasks/:id/assign`

Example request:

```json
{
  "userId": 5
}
```

## Delete a Task

**DELETE** `/tasks/:id`

Example:

```text
DELETE /tasks/1
```

A successful deletion returns `204 No Content`.

## Validation

Request data is validated using Zod.

Invalid requests return a validation error response.

## Error Handling

The application uses centralized error-handling middleware for API errors such as tasks that do not exist.

## Code Quality

Run ESLint:

```bash
npm run lint
```

Build the project:

```bash
npm run build
```

Format the project:

```bash
npm run format
```

## Notes

Task data is currently stored in memory through the repository layer. The repository layer can be replaced with a database implementation later without changing the overall application structure.
