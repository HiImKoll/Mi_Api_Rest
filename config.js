const mongoose = require("mongoose");
const dbconect = () => {
    mongoose.set("strictQuery", true)
    mongoose.connect("mongodb://localhost:27017/users_prueba",{},(err,res) => {
        if(!err){
            console.log("Conexion exitosa")
        }
        else {
            console.log("Error de conexion");
        }
    })
}

module.exports = dbconect;