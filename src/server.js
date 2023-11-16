import express from "express";
import dbConnection from "./config/db.js";
import playerRoutes from "./routes/playerRoutes.js"
import Player from "./model/Player.js";
import bodyParser from 'body-parser';

const app = new express()
const port = 20057

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/player", playerRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


try{
    console.log("STATUS -> Intentando conectarse a la base de datos...")
    dbConnection.authenticate();
    console.log("STATUS -> Conexion a la BD exitosa")
    console.log("STATUS -> Sincronizando la BD con los objetos existentes")
    dbConnection.sync();
    console.log("STATUS -> BD Lista para realizar operaciones")

}catch(error){
    console.error("Han ocurrido errores intentando conectarse a la BD")
    console.error(error)
}



