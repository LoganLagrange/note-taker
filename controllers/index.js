const express = require("express");
const router = express.Router();

const htmlRoutes = require("./htmlController")
router.use(htmlRoutes)

module.exports = router;