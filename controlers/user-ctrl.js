const { findOne } = require("../models/user.models");
const User = require("../models/user.models");


const getUsers = async (req, res) => {


  const users = await User.find({});
  if (users.length > 0) {

    let dataUser = await Promise.all(users.map(async (user) => {

      if (user.rol) {
        const role = await Rol.findOne({ _id: user.rol })
        return { ...user._doc, rolName: role.name }
      } else {
        return { ...user._doc }
      }
    }))
    return res.status(200).json({
      success: true,
      data: dataUser,
    });
  } else {
    return res.status(203).json({
      success: false,
      data: "Not users",
    });
  }
};


const createUser = async (req, res) => {
  const datos = req.body;
  if (datos && datos.email) {
    const exist=User.findOne({email:datos.email})
    if(!exist?._id){
    const user = new User(datos);
    const resp = await user.save();
    if (resp._id) {

      return res.status(200).json({
        success: true,
        data: resp,
      });
    } else {
      return res.status(200).json({
        success: false,
        data: "USER NO CREATED",
      });
    }
  } else {
    return res.status(200).json({
      success: false,
      data: "email ya exist",})
    }

  }else{
    return res.status(200).json({
      success: false,
      data: "campos incompletos",})
  }

};
const login = async (req, res) => {
  const datos = req.body
  if (datos.email & datos.password) {
    const user = await User.findOne({ email: datos.email, password: datos.password })

    if (user) {
      return res.status(200).json({
        success: true,
        data: user,
      });
    } else {
      return res.status(200).json({
        success: false,
        data: "email or password incorrect",
      });
    }
    }else {
      return res.status(203).json({
        success: false,
        data: "email and password has required",
      });


    }

  }



  const assigRol=async(req,res)=>{ 
    const body=req.body
    const idUser=req.params.idUser
    if(idUser && body.rol){
        const user = await User.findOne({_id:idUser})
        if(user){
            const role=await Rol.findOne({_id:body.rol})
            if(role){
                user.rol=body.rol
                const resp=await user.save()
                return res.status(200).json({
                    success: true,
                    data: {...user._doc,rolname:role.name},
                  });  
            }else{
                return res.status(203).json({
                    success: false,
                    data: "role not found",
                  });  
            }
            
        }else{
            return res.status(203).json({
                success: false,
                data: "user not found",
              }); 
        }
    }else{
        return res.status(203).json({
            success: false,
            data: "rol is required",
          }); 
    }


}
  module.exports = {
    getUsers,
    createUser, login,
    assigRol
  };