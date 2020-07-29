const express = require("express");
const router = express.Router();

const homeController = require("../controller/home.controller");
const urlController = require("../controller/url.controller");

router.get("", homeController.display);
router.get("/:id", urlController.getOrginalUrl);

module.exports = router;
