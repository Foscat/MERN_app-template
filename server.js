/**
 * @file server.js
 * @description Main entry point for the Express server, responsible for API routing, static file serving, and database connection.
 * @author Foscat
 * @version 1.0.0
 * @license MIT
 * @see {@link https://expressjs.com/} for Express documentation
 * @see {@link https://mongoosejs.com/} for Mongoose documentation
 */

const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./app/routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mern_template";

// Hardening defaults for modern Mongoose applications.
mongoose.set("strictQuery", true);

// Middleware stack for request parsing and CORS policy handling.
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes are registered before static handling so API requests always win.
app.use(routes);

if (process.env.NODE_ENV === "production") {
  const clientDistPath = path.join(__dirname, "client", "dist");

  // Serve compiled frontend assets.
  app.use(express.static(clientDistPath));

  // Single-page app fallback route for client-side routing.
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to initialize backend services.", error);
    process.exit(1);
  }
};

startServer();
