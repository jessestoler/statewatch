const router = require("express").Router();
const personController = require("../../controllers/personController");

// Matches with "/api/books"
router.route("/")
  .get(personController.findAll)
  .post(personController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(personController.findById)
  .put(personController.update)
  .delete(personController.remove);

module.exports = router;
