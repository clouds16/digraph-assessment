const mongoose = require('mongoose');

const Workflow = mongoose.model('Workflow', new mongoose.Schema({
    name: {
        required : true, 
        type: String
    },
    nodes : {
       
    },
    edges : {
        
    }
   
} , { timestamps: true } ));


module.exports = Workflow

