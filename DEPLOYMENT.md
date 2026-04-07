# Deployment Guide

This project is deployed as a single Node.js web service:

- `Express` serves API routes at `/api/*`
- In production, `Express` also serves the built Vite frontend from `client/dist`

## Prerequisites

1. A MongoDB connection string (`MONGODB_URI`)
1. Node.js 18+ locally (for testing before deploy)
1. Your code pushed to GitHub/GitLab (or connected directly to platform)

## Required Environment Variables

Set these in your deployment platform:

- `MONGODB_URI`: your MongoDB Atlas/local cloud URI
- `NODE_ENV=production`
- `PORT`: usually set automatically by platform (do not hardcode unless required)

## Verify Locally Before Deploying

From project root:

```bash
npm install
npm run client:install
npm run build
npm run start:prod
```

Then open `http://localhost:3001`.

## Render (Recommended)

1. Create a new `Web Service` and connect your repository.
1. Use these settings:
   - Build Command: `npm install && npm run client:install && npm run build`
   - Start Command: `npm run start:prod`
1. Add environment variables:
   - `NODE_ENV=production`
   - `MONGODB_URI=<your-uri>`
1. Deploy and open your Render URL.

## Replit Deployments

1. Import this repo into Replit.
1. Open `Deployments` and choose an `Autoscale` web deployment.
1. Set commands:
   - Build Command: `npm install && npm run client:install && npm run build`
   - Run Command: `npm run start:prod`
1. Add Secrets:
   - `NODE_ENV=production`
   - `MONGODB_URI=<your-uri>`
1. Deploy. Replit provides `PORT` automatically.

## Heroku

This repo already includes `heroku-postbuild` to build the client.

```bash
heroku login
heroku create <your-app-name>
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=<your-uri>
git push heroku main
heroku open
```

Notes:

- If your default branch is `master`, push `master` instead of `main`.
- Heroku sets `PORT` automatically.

## Railway

1. Create a new project from your GitHub repo.
1. In service settings:
   - Build Command: `npm install && npm run client:install && npm run build`
   - Start Command: `npm run start:prod`
1. Add variables:
   - `NODE_ENV=production`
   - `MONGODB_URI=<your-uri>`
1. Deploy and open the generated domain.

## Common Deployment Errors

### App loads but API fails (`500`/DB errors)

- `MONGODB_URI` is missing or incorrect.
- MongoDB Atlas network access is not allowing your deployment platform IPs.

### API works, but frontend is blank or stale

- Client was not built in deploy pipeline.
- Ensure build command includes: `npm run client:install && npm run build`.

### Route refresh returns 404

- Start command is wrong (must run the Node server, not Vite dev server).
- Use `npm run start:prod`.

## Optional Production Hardening

- Add a `/health` endpoint for uptime checks.
- Restrict CORS origins instead of allowing all origins.
- Add schema validation for API payloads.
- Add process manager/restart policy if your platform supports it.
