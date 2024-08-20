const mongoose =require ("mongoose");

const MessageSchema = new mongoose.Schema({
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "conversations",
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MessageModel = mongoose.model("Message", MessageSchema);
module.exports = MessageModel
