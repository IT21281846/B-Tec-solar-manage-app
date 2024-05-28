const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const clientSchema = new Schema({
    email : {
        type:String,
        required: true
    } ,
    fname : {
        type:String,
        required: true
    } ,
    lname : {
        type:String,
        required: true
    } ,
    password :{
        type:String,
        required: true
    }
})
const Client = mongoose.model("Client", clientSchema);
module.exports = Client;