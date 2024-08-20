const express = require("express");
const{newmessage} = require("../controllers/Message")
const{Getmessage} = require("../controllers/Message")

const router = express.Router();
router.post("/newmessage",newmessage)
router.get("/Getmessage/:conversationID",Getmessage)

module.exports = router;
