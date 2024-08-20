const ConversationModel = require("../modules/ConversationSchema");
const UserModel = require("../modules/userschema");
const PsychiatreModel = require("../modules/Psychiatreschema");
const NotifyerDBModel = require("../modules/notifyerschema");
exports.createConversation= async (req,res)=>{
    const newConversation = req.body
    try {
        const conversation = new ConversationModel(newConversation)
        const saved = await conversation.save()
        if (saved){
            const notification = await NotifyerDBModel.findOne({
                user_id: newConversation.user_id,
                psychiatre_id: newConversation.psychiatre_id
              });
              notification.read = true;
              await notification.save();
            res.send(saved)}
        else {res.send("conversation not created")}
    } catch (error) {
        console.log(error)
    }
}
exports.getConversation =async(req,res)=>{
    const id = req.params.psychiatre_id
    try{
        const conversationList = await ConversationModel.find({ psychiatre_id: id });
        const userIds = conversationList.map((conversation) => conversation.user_id); // Get all user ids from notifIds
    
        const userInfo = await UserModel.find({ _id: { $in: userIds } }); // Find all users with the ids
    
        res.send({ conversations: conversationList, users: userInfo }); // Send both notifIds and user info in one response
        console.log(conversationList, userInfo);
    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
}
exports.getConversationPsy =async(req,res)=>{
    const id = req.params.userId
    
    try{
        const conversationList = await ConversationModel.find({ user_id: id });
        const MyPsyId = conversationList.map((conversation) => conversation.psychiatre_id); // Get all user ids from notifIds
    
        const psyInfo = await PsychiatreModel.find({ _id: { $in: MyPsyId } }); // Find all users with the ids
    
        res.send({ conversations: conversationList, psychiatre: psyInfo }); // Send both notifIds and user info in one response
        console.log(conversationList, psyInfo);
    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
}
