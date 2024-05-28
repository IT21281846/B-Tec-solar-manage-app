const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const projectSchema = new Schema({

    projectName : {
        type:String,
        required: true
    },
    projectId : {
        type:String,
        required: true
    },
    location : {
        type:String,
        required: true
    },
    capacity : {
        type:String,
        required: true
    },
    customer : {
        type:String,
        required: true
    },
    cost : {
        type:String,
        required: true
    },
    usedProducts : {
        type:String,
    },
    description : {
        type:String,
    }
    
})

const Project = mongoose.model("Project",projectSchema);
module.exports = Project;