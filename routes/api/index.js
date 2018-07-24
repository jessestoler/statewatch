const router = require("express").Router();
const personRoutes = require("./persons");
const stateRoutes = require("./states");
const blogRoutes = require("./blogs");
const commentRoutes = require("./comments");
const billRoutes = require("./bills");


// Book routes
router.use("/states", stateRoutes);
router.use("/persons", personRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/bills", billRoutes);

module.exports = router;

