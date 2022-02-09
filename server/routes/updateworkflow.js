var express = require('express');
var router = express.Router();

//import mongoose schema
let Workflow = require("../database/models/workflow")


/* GET home page. */
router.put('/update', function(req, res, next) {
  res.render('index', { title: 'Create' });
});

module.exports = router;
