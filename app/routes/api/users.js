const router = require("express").Router();
const userController = require("../../controllers/users");

// Collection routes for listing and creating users.
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Resource routes for a single user by identifier.
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
