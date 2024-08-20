const mongoose = require("mongoose")

const Questionnaire = mongoose.Schema({
    answer :{
        type: Array,
        required: true,
     
    },
    
    
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "users",
        required: true
    }

})
const AnswerModel = mongoose.model("answers", Questionnaire)
module.exports = AnswerModel
