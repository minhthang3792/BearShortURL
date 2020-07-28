const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const url_controller = require('../controller/url.controller');
const mongo_controller = require('../datasource/MongoDataSource');


// a simple test url to check that all of our files are communicating correctly.
router.post('/gen', url_controller.gen);
router.get('/hash/:id', url_controller.hash);
// router.get('/mongo', mongo_controller.mongo);
module.exports = router;
