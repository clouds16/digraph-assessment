var express = require('express');
var router = express.Router();

//import mongoose schema to create 
let Workflow = require("../database/models/workflow")

/* GET home page. */
router.post('/create', async function(req, res, next) {
    let data = req.body 
    console.log(data)

    try {
      let workflow = await new Workflow(data)
      res.send(workflow)
      
    } catch (e) {
      res.send(e)
    }
});

module.exports = router;
