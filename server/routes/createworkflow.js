var express = require('express');
var router = express.Router();

//import mongoose schema to create 
let Workflow = require("../database/models/workflow")

/* GET home page. */
router.post('/create', function(req, res, next) {
  res.render('index', { title: 'Create' });
});

module.exports = router;
