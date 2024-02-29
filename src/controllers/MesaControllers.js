import mesa from "../models/Mesa.js";


class MesaController {
    static async mesaList (req, res) {
        const allMesas = mesa.find();
        res.status(200).json({ message: "Requisição feita com sucesso!", allMesas });
    }
}

export default MesaController;