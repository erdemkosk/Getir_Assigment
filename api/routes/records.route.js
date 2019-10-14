/* 3rd party modules */
var path = require("path");
var router = require("express").Router();
global.appRoot = path.resolve('./'); // define application's root directory as a global variable
/* imports */
var recordController = require(path.join(appRoot,"api", "controllers", "records.controller"));

//Get
router.route("/getAllRecords").get(recordController.getAllRecords);

//Post
router.route("/records").post(recordController.getFindedRecordsFromCriterias);

module.exports = router;
