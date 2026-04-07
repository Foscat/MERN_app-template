# MERN App Template

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](#license)

A production-ready MERN starter with an Express + MongoDB API and a React (Vite) frontend.
It includes a complete `User` CRUD example so you can quickly extend the project for your own features.

## Overview

- Backend: Express + Mongoose API under `/api`
- Frontend: React 18 + Vite + RSuite
- Database: MongoDB (local or hosted via `MONGODB_URI`)
- Includes: end-to-end `User` create/read/update/delete flow
- UI theming: token-based styles with light, dark, and high-contrast modes

## Tech Stack

### Backend

- Node.js
- Express
- Mongoose
- CORS
- dotenv
- concurrently + nodemon (dev workflow)

### Frontend

- React 18
- Vite
- React Router v6
- RSuite v5
- Axios

## UI Theming

The frontend includes a token-driven style system in `client/src/App.css`:

- Theme modes: `light`, `dark`, `high-contrast`
- Global CSS variables for surfaces, text, borders, buttons, status colors, and focus states
- Reusable utility/base classes for layout and components (`.container`, `.section`, `.stack`, `.row`, `.card`, `.btn-*`, etc.)
- Navbar theme toggles persist user preference in `localStorage`

Theme mode is applied through `data-theme` on `:root` and theme classes on `body/#root`.

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm
- MongoDB instance (local or cloud)

### Installation

From the project root:

```bash
npm install
npm run client:install
```

This installs backend dependencies first, then client dependencies.

### Development

```bash
npm start
```

This starts:

- Express API server on `http://localhost:3001`
- Vite client dev server on `http://localhost:3000`

The Vite dev server proxies `/api` requests to `http://localhost:3001`.

## Environment Variables

Create a `.env` file in the project root as needed:

```env
MONGODB_URI=mongodb://localhost/mern_template
PORT=3001
NODE_ENV=development
```

Notes:

- If `MONGODB_URI` is not set, the app defaults to `mongodb://localhost/mern_template`.
- `PORT` defaults to `3001`.

## Available Scripts

### Root scripts

- `npm start`: Runs production or development mode based on `NODE_ENV`
- `npm run dev`: Alias for `start:dev`
- `npm run client:install`: Installs frontend dependencies
- `npm run start:dev`: Starts nodemon server + Vite client
- `npm run start:prod`: Starts Express server only
- `npm run build`: Builds the frontend into `client/dist`

### Client scripts

- `npm run dev` (inside `client`): Runs Vite dev server
- `npm run build` (inside `client`): Production build
- `npm run preview` (inside `client`): Preview built client

## API Endpoints

User routes:

- `GET /api/users` - list users
- `POST /api/users` - create user
- `GET /api/users/:id` - get user by id
- `PUT /api/users/:id` - update user
- `DELETE /api/users/:id` - delete user

## Project Structure

```text
MERN_app-template/
|- app/
|  |- controllers/
|  |- models/
|  |- routes/
|- client/
|  |- src/
|  |- index.html
|  |- vite.config.mjs
|- DEPLOYMENT.md
|- server.js
|- package.json
```

## Deployment

Platform-specific deployment steps are documented in [`DEPLOYMENT.md`](./DEPLOYMENT.md), including:

- Render
- Replit Deployments
- Heroku
- Railway

It also includes required environment variables, build/start commands, and common production troubleshooting.

## Production Notes

- Build the client with `npm run build` from the root.
- In production mode (`NODE_ENV=production`), Express serves static assets from `client/dist`.
- For full hosted deployment instructions, see [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## Roadmap

- Add request schema validation middleware for all API endpoints.
- Add authentication and role-based authorization.
- Introduce automated backend and frontend test coverage in CI.
- Add Docker development and deployment configuration.
- Publish API reference with OpenAPI/Swagger.

## Contributing

Contributions are welcome. To keep changes easy to review and maintain:

1. Fork the repository and create a focused feature branch.
2. Keep pull requests scoped to one logical change.
3. Update documentation when behavior or scripts change.
4. Verify the app builds successfully before opening a PR.
5. Include clear PR descriptions with testing notes.

## License

ISC
