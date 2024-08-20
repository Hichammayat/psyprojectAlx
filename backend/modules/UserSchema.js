const mongoose = require("mongoose")

const user = mongoose.Schema({
    Firstname :{
        type: String,
        required: true,
        min:2,
        max:50

    },
    Lastname:{
        type: String,
        required: true,
        min:2,
        max:50
    },
    Email:{
        type: String,
        required:true,
        max:50,
        unique:true
    },
    Password:{
        type: String,
        required:true,
        min:5
    },
    picturePath:{
        type:String,
        default:""
    },
    questionnaire:{
        type:Array,
        default:[]
    },
    Location:{
        type:String,
        required:true
    },
    Occupation:{
        type:String,
        required:true
    },
    PostLiked:{
        type:Array,
        default:[]
    },
    birthday:Date,

},{
    timestamps: true  
})
const UserModel = mongoose.model("user", user)
module.exports = UserModel
