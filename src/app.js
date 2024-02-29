import ConnectToDB from "./config/dbConnect.js";
import express from "express";
import route from "./routes/index.js";

const connection = ConnectToDB();

connection.once("open", () => {
    console.log("Conexão com o Banco de Dados feita!");
});

const app = express();
route(app);

export default app;
