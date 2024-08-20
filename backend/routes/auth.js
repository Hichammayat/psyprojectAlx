const express = require("express");
const  {login,register,updateUser } = require("../controllers/auth.js");


const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.put("/updateUser/:id",updateUser);

module.exports = router;
