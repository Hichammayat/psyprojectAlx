const express = require("express");
const {postuler} = require("../controllers/psychiatre");
const{loginPsy} = require("../controllers/psychiatre")
const{getCv} = require("../controllers/psychiatre")
const{GetPsychiatres} = require("../controllers/psychiatre")
const{updatePsy} = require("../controllers/psychiatre")
const{updateProfilePic} = require("../controllers/psychiatre")

const router = express.Router();
router.post("/loginPsy", loginPsy);
router.post("/Postuler", postuler);
router.post("/getCv", getCv);
router.get("/GetPsychiatres", GetPsychiatres)
router.put("/updatePsy/:id", updatePsy)
router.post("/updateProfilePic/:id", updateProfilePic)

module.exports = router;
