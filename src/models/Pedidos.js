import mongoose, { mongo } from "mongoose";

const pedidoSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    pedidos: { type: mongoose.Types.Array },
    valor: { type: Number },
    telefone: { type: String }
}, { versionKey: false });

const pedido = mongoose.model("pedido", pedidoSchema);

export default { pedido, pedidoSchema }
