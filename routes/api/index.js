const router = require("express").Router();
const senateRoutes = require("./senators");
const stateRoutes = require("./states");
const blogRoutes = require("./blogs");

// Book routes
router.use("/states", stateRoutes);
router.use("/senators", senateRoutes);
router.use("/blogs", blogRoutes);

module.exports = router;

