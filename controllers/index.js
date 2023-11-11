const express = require("express");
const router = express.Router();

const notesRoutes = require("./notesController")
router.use(notesRoutes)

const htmlRoutes = require("./htmlController")
router.use(htmlRoutes)

module.exports = router;