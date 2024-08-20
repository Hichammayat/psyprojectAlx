const mongoose  = require('mongoose')


const NotifyerModel = mongoose.Schema({
    
    psychiatre_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "psychiatres",
        required: true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "users",
        required: true
    },
    read:{
        type: Boolean,
        
    }
},
{
    timestamps: true,
  })


const NotifyerDBModel = mongoose.model('notifications', NotifyerModel)

module.exports = NotifyerDBModel
