var express = require('express');
var router = express.Router();

//import mongoose schema to update
let Workflow = require("../database/models/workflow")

/* GET home page. */
router.get('/read', async function(req, res, next) {
    
    try {
        let allworkflows  =  await Workflow.find({})
        res.send(allworkflows)

    } catch(e) {
        res.send(e)
    }
});

module.exports = router;
