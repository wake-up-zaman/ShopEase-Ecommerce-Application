const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

module.exports=mongoose.model("User",userSchema);