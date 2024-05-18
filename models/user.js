const mongoose = require("mongoose")



const userSchema = mongoose.Schema({
    Fullname:String,
    email:String,
    password:String,
    isAdmin:Boolean,
    cart:{
        typeof:Array,
        default:[]
    },
    orders:{
        typeof:Array,
        default:[]
    },
    contact:Number,
    picture:
})


