const mongoose = require("mongoose")

const psychiatre = mongoose.Schema({
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
        min:5
    },
    picturePath:{
        type:String,
        default:""
    },
    
    Location:{
        type:String,
        required:true
    },
    Occupation:{
        type:String,
        required:true
    },
    cv:{
        type:String,

    },
    Patients :{
        type: Array,
        default:[]
     },
    Posts:{
        type: Array,
        default:[]
    },
    ProfileValidate:{
        type: Boolean,
        default:true

    },
    Description:{
        type: String,
        default:""
    },
    birthday:Date,

},{
    timestamps: true  
})
const PsychiatreModel = mongoose.model("Psychiatre", psychiatre)
module.exports = PsychiatreModel
