const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name:{
        type:String,
        min:3,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        min:3,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
},{timestamps:true})

const userModel = mongoose.model("user",userSchema)
module.exports = userModel