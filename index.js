console.log("vamos con toda............")

const express = require("express")
const bodyParser=require("body-parser")
const userRouter = require("./routes/user-route")
const role=require("./routes/role_router")
const db = require("./db");
const app = express();


app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", userRouter)
app.use("/api",role)
app.listen(3000, () => console.log('Escuchando en el puerto 3000'));

