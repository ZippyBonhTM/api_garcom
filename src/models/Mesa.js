import mongoose, { SchemaType } from "mongoose";
import { pedidoSchema } from "./Pedidos.js";

const mesaSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    mesa_id: { type: Number },
    pedidos: pedidoSchema
}, { versionKey: false });

const mesa = mongoose.model("mesa", mesaSchema);

export default mesa;
