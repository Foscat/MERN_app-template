const router = require("express").Router();
const apiRoutes = require("./api");

// Mount all API routes under a single prefix for predictable routing.
router.use("/api", apiRoutes);


module.exports = router;
