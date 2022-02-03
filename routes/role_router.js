const express= require("express");
const role= require("../controlers/role-ctrl")
const router= express.Router()


router.get("/role",role.getRol);
router.post("/role",role.createRol);
module.exports=router