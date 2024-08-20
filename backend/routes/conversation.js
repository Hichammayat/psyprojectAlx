const express = require("express");
const {createConversation} =require ("../controllers/conversation")
const{getConversation} = require("../controllers/conversation")
const{getConversationPsy }= require("../controllers/conversation")
const router = express.Router();

router.post("/createConversation", createConversation)
router.get("/getConversation/:psychiatre_id", getConversation)
router.get("/getConversationPsy/:userId",getConversationPsy)
module.exports = router;
