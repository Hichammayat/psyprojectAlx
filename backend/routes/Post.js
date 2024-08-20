const express = require("express");

const{newPost} =require("../controllers/Post")
const{displayPost}=require("../controllers/Post")
const{displayAllpost}=require("../controllers/Post")
const{getPostDetails}=require("../controllers/Post")
const router = express.Router();

router.post("/Post/:id", newPost);
router.get("/displayPost/:psychiatre_id", displayPost)
router.get("/displayAllpost", displayAllpost)
router.get("/getPostDetails/:id",getPostDetails)
module.exports = router;
