const express = require('express');
const router = express.Router();

const url_controller = require('../controller/url.controller');


router.post('/hashUrl', url_controller.hashUrl);
router.get('/hash/:id', url_controller.getOrginalUrl);

module.exports = router;
