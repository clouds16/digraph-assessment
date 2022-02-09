const mongoose = require('mongoose');

const Workflow = mongoose.model('Workflow', new mongoose.Schema({
    name: {
        required : true, 
        type: String
    },
    connections : {
        required : false, 
        type: []
        
    }
   
} , { timestamps: true } ));


module.exports = Workflow

