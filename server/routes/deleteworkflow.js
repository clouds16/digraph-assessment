var express = require('express');
var router = express.Router();

//import mongoose schema
let Workflow = require("../database/models/workflow")

//delete workflow page
router.delete('/delete', async function(req, res, next) {
  let data = req.body ;
  console.log(data)

  try {
    await Workflow.findByIdAndRemove({ _id : data._id})
    res.send(data)

  } catch (e) {
    res.send(e)
  }
  //res.render('index', { title: 'Delete' });
});

module.exports = router;
