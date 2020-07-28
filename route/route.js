const express = require("express");
const router = express.Router();

const urlController = require("../controller/url.controller");
const homeController = require("../controller/home.controller");

router.post("/hashUrl", urlController.hashUrl);
router.get("/hash/:id", urlController.getOrginalUrl);
router.get("", homeController.display);

module.exports = router;
