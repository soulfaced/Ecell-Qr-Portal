const mongoose = require('mongoose');
const validator = require('validator');

const userSchema=new mongoose.Schema(
    {
        //name,email,event,password
        name:{
            type: String,
            required:[true,"name is requied"]
        },
        email:{
            type:String,
            unique:true,
            required:[true,"emial is required"],
            lowercase:true,
            validate:[validator.isEmail,"provide correct email"]
        },
        event:{
            type:String
        },
        photo:{
            type:String
        },
        password:{
            type:String,
            required:[true,"password is required"],
            minlength:8
        },
        passwordConform:{
            type:String,
            required:[true,"conform your password"]
        }
    }
);

const User = mongoose.model('User',userSchema);

module.exports = User;