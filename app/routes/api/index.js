const router = require("express").Router();
const userRoutes = require("./users");

// Group all user-specific endpoints.
router.use("/users", userRoutes);

module.exports = router;
