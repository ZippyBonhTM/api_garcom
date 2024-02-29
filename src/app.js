import conection from "./config/dbConnect.js";
import express from "express";
import route from "./routes/index.js";


conection.once("open", () => {
    console.log("Conexão com o banco feita!");
});

const app = express();
route(app);

export default app;
