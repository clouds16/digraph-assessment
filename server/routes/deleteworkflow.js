var express = require('express');
var router = express.Router();

//import mongoose schema
let Workflow = require("../database/models/workflow")

//delete workflow page
router.delete('/delete', function(req, res, next) {
  let data = req.body ;


  try {
    Workflow.findByIdAndDelete( data._id )

  } catch (e) {
    res.send(e)
  }
  //res.render('index', { title: 'Delete' });
});

module.exports = router;
