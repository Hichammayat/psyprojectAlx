const MessageModel = require("../modules/MessagesSchema")

exports.newmessage = async (req, res) =>{
    const message= req.body
    console.log(message)
    try{
         
            const newMessage= new MessageModel(message)
            const saved = await newMessage.save()
            console.log(saved)
            if (saved)res.send(saved)
        else res.send("message not inserted")
        

    }catch(err) {console.error(err)}}

    exports.Getmessage = async (req, res) =>{
        const id= req.params.conversationID
        console.log(id)
        try{
             
                const messageId= await MessageModel.find({conversationID:id})
                
                res.send(messageId)
            
            
    
        }catch(err) {console.error(err)}}
