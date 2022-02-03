const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {        
        username: { type: String },
        email: { type: String },
        name: { type:String },
        last_name: { type:String },
        password: { type: String },
        rol:{ type: String },       
        status: { type: Number, default: 1 },
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', User)