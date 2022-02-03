const Rol = require("../models/role_model");


const getRol = async (req, res) => {
    const roles = await Rol.find({});
    if (roles.length > 0) {

        return res.status(200).json({
            success: true,
            data: roles,
        });
    } else {

        return res.status(203).json({
            success: false,
            data: "Not roles",
        });
    }
}

const createRol = async (req, res) => {
    const datos = req.body;
    if (datos.name) {
        const role = new Rol(datos);
        const resp = await role.save();
        if (resp._id) {
            return res.status(200).json({
                success: true,
                data: resp,
            });
        } else {
            return res.status(203).json({
                success: false,
                data: "Role no created",
            });
        }
    } else {
        return res.status(203).json({
            success: false,
            data: "name rol is required",
        });
    }
}






module.exports = {
    getRol,createRol

};