const router = require("express").Router();
const senateController = require("../../controllers/senateController");

// Matches with "/api/books"
router.route("/")
  .get(senateController.findAll)
  .post(senateController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(senateController.findById)
  .put(senateController.update)
  .delete(senateController.remove);

module.exports = router;
