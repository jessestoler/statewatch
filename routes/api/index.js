const router = require("express").Router();
const senatorRoutes = require("./senators");
const stateRoutes = require("./states");
const blogRoutes = require("./blogs");
const commentRoutes = require("./comments");


// Book routes
router.use("/states", stateRoutes);
router.use("/senators", senatorRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);

module.exports = router;

