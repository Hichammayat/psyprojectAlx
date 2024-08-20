const NotifyerDBModel = require("../modules/notifyerschema");
const UserModel = require("../modules/userschema");






exports.sendNotif= async (req,res)=>{
    const newNotif = req.body
    try {
        const notification = new NotifyerDBModel(newNotif)
        const saved = await notification.save()
        if (saved)res.send(saved)
        else res.send("notif not sended")
    } catch (error) {
        console.log(error)
    }
}
exports.getNotif = async (req, res) => {
    const id = req.params.psychiatre_id;
    console.log("one");
    try {
      const notifId = await NotifyerDBModel.find({ psychiatre_id: id,read: { $ne: true } });
      const userIds = notifId.map((notif) => notif.user_id); // Get all user ids from notifIds
  
      const userInfo = await UserModel.find({ _id: { $in: userIds } }); // Find all users with the ids
  
      res.send({ notifications: notifId, users: userInfo }); // Send both notifIds and user info in one response
      console.log(notifId, userInfo);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal server error");
    }
  };

exports.deletNotif =async(req,res)=>{
  const notif_id = req.params._id
  

  try {
      
          let DLT = await NotifyerDBModel.deleteOne({_id: notif_id})
            console.log(DLT)

          res.send(notif_id)
      
  } catch (error) {console.error(error)
      
  }
}
