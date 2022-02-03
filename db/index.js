const mongoose = require('mongoose')

mongoose
    .connect("mongodb://localhost:27017/poliplasticComercial1", { useNewUrlParser: true }).then(()=>console.log("CONECTADO A MONGO"))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
