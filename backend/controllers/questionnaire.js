const AnswerModel = require("../modules/Questionnaireschema")


exports.Questionnaire= async (req, res) =>{
    const answer= req.body
    console.log(answer)
    try{
         
            const newAnswer= new AnswerModel(answer)
            const saved = await newAnswer.save()
            console.log(saved)
            if (saved)res.send(saved)
        else res.send("answers not inserted")
        

    }catch(err) {console.error(err)}}

exports.checkAnswer = async (req, res) => {
        const userId = req.params.id
        console.log(req.params.id)
        try {
          const answer = await AnswerModel.findOne({ user_id: userId });
          if (answer) {
            res.send(answer);
          } else {
            res.send(false);
          }
        } catch (err) {
          console.error(err);
        }
      };
