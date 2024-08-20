const PsychiatreModel = require("../modules/Psychiatreschema");
const fs = require('fs');

exports.postuler = async (req, res) =>{
    const psychiatre= req.body
    console.log(req.body)
 
    try{
        let result = await PsychiatreModel.findOne({Email: psychiatre.Email})
       
    if(result){
        res.send("Psychiatre already exist") }
        else{
            const newPsychiatre= new PsychiatreModel(psychiatre)
            const saved = await newPsychiatre.save()
            
            if (saved)
            res.send("Psychiatre inserted")
            else res.send("not inserted")
        }
    
    }catch(err) {console.error(err)};

   
}

exports.loginPsy = async (req, res) =>{
    let psyAccount = req.body
    try {
    let psyAccount_result = await PsychiatreModel.findOne({Email: psyAccount.Email,Password: psyAccount.Password})
    if (psyAccount_result) {
        res.send(psyAccount_result)
       

    } else {
        res.send(false)
        
    }
    }catch(err) {
        console.error(err.message)
    }
}
exports.GetPsychiatres= async (req, res) => {
    try {
        let psychiatres = await PsychiatreModel.find({});
    if (psychiatres) {
      res.send(psychiatres);
    } else {
      console.log("No psychiatres in DB");
    }
  }
        
     catch (error) {
       console.log(error) 
    }

}


exports.getCv = async (req, res) =>{
 const file = req.files.resume
 const path = `${__dirname}\\uploads\\resume\\${file.name}`
 file.mv(path, (err)=>{
       if(err){
        console.log(err)
       }else{
        console.log("file created")
       }
    })
}

exports.updatePsy = async (req, res) => {
    const  psyId  = req.params.id; // id of the user to be updated
    const userUpdates = req.body; // the new information to update the user with
  
    try {
      const result = await PsychiatreModel.findOne( {_id:psyId})
         
  
      if (result) {
        await PsychiatreModel.updateOne({ _id: psyId }, userUpdates);
        res.status(200).json({ message: 'Votre profil a été mis à jour avec succès.' });
      } else {
        res.status(404).json({ message: 'Psychiatre non trouvé.' });
      }
    } 
      
     catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  };


  exports.updateProfilePic = async(req,res) =>{
    let psyId = req.params.id;
  const file = req.files.image;
  const path = `uploads/avatars/${psyId}`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  const imagePathAtback = `${path}/${file.name}`;
  const imagePath = `${file.name}`;

  file.mv(imagePathAtback, async (err) => {
    if (err) {
      console.log(err);
    } else {
      await PsychiatreModel.updateOne(
        {_id: psyId},
        {picturePath: imagePath}
      );
      console.log(
        `Psy with ID: ${psyId} uploaded a file: ${file.name}`
      );
      res.send('Profile picture updated successfully');
    }
  });
  }
