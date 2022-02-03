const express = require("express");
const UserCtrl = require('../controlers/user-ctrl')

const router = express.Router()

router.get("/user",UserCtrl.getUsers)
router.post("/user",UserCtrl.createUser)
router.post("/userLogin",UserCtrl.login)

module.exports=router