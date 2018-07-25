const router = require("express").Router();
const stateController = require("../../controllers/stateController");

router.route("/")
  .get(stateController.findAll)
  .post(stateController.create);

router
  .route("/:id")
  .get(stateController.findById)
  .put(stateController.update)
  .delete(stateController.remove);

module.exports = router;
