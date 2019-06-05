const router = require("express").Router();
const userRoutes = require("./users");

// Index serves as directory for routes

// User routes
router.use("/users", userRoutes);

module.exports = router;