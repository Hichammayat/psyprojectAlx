const mongoose = require("mongoose")

const ConversationSchema = new mongoose.Schema({
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref : "users",
    required: true
  },
  psychiatre_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref : "psychiatres",
    required: true
  },
  },
  {timestamps: true}
);
