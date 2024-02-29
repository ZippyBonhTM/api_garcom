import express from "express";
import mesaController from "../controllers/MesaControllers.js";


const routes = express.Router();

routes.get("/mesa", mesaController.mesaList);

export default routes;
