const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");

// Customer routes
router.use("/users", userRoutes);

module.exports = router;