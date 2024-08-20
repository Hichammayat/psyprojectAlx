const UserModel = require("../modules/userschema")

/*register user*/
exports.register = async (req, res) =>{
    let user = req.body
    try {
        let result = await UserModel.findOne({Email: user.Email})
    if(result){
        res.send("user already exist")
    }else{
        const newUser = new UserModel(user)
        const saved = await newUser.save()
        if (saved)res.send("user inserted")
        else res.send("not inserted")
        

    }
        
    } catch (err) {console.log(err.message)} {
        
    }
}
/* LOGGING IN */
exports.login = async (req, res) =>{
    let userAccount = req.body
    try {
    let userAccount_result = await UserModel.findOne({Email: userAccount.Email,Password: userAccount.Password})
    if (userAccount_result) {
        res.send(userAccount_result)
       

    } else {
        res.send(false)
        
    }
    }catch(err) {
        console.error(err.message)
    }
}

exports.updateUser = async (req, res) => {
    const { id } = req.params; // id of the user to be updated
    const userUpdates = req.body; // the new information to update the user with
  
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(id, userUpdates, {
        new: true, // return the updated document
        runValidators: true, // validate the update against the model's schema
      });
  
      if (!updatedUser) {
        return res.status(404).send('User not found');
      }
  
      res.send(updatedUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  };
