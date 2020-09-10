const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        minlength:10,
        trim:true
    },
    image:{
        type:String
    }
}, {timestamps: true})

const User1 = mongoose.model('User1', userSchema)

module.exports = User1