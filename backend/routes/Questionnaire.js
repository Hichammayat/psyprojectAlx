const express = require("express");
const{Questionnaire} = require("../controllers/questionnaire")
const{checkAnswer} = require("../controllers/questionnaire")

const router = express.Router();

router.post("/Questionnaire/:user_id", Questionnaire);
router.post("/checkAnswer/:id",checkAnswer )


module.exports = router;
