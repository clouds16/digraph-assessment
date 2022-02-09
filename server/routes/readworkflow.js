var express = require('express');
var router = express.Router();

//import mongoose schema to update
let Workflow = require("../database/models/workflow")

/* GET home page. */
router.get('/read', function(req, res, next) {
    res.render('index', { title: 'Read' });
});

module.exports = router;
