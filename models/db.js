const mongoose = require("mongoose");


function connectdb(){

    mongoose.connect("mongodb://localhost:27017",function(){
        console.log("connected to db.");
    });



}


module.exports = connectdb

