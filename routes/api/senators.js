const router = require("express").Router();
const senatorController = require("../../controllers/senatorController");

// Matches with "/api/books"
router.route("/")
  .get(senatorController.findAll)
  .post(senatorController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(senatorController.findById)
  .put(senatorController.update)
  .delete(senatorController.remove);

module.exports = router;
