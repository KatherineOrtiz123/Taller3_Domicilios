const mongoose = require("mongoose"); // importando el componente mogoose
const domicilioSchema = mongoose.Schema({
    Codigo_Pedido: {
        type: Number,
        required: true,
    },
    Direccion: {
        type: String,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Telefono: {
        type: Number,
        required: true,
    },
    Modo_Pago: {
        type: String,
        requiered: false,
    },
    Costo_Total: {
        type: Number,
        requiered: false,
    },
    Detalle_Pedido: {
        type: String,
        requiered: false,
    }
    
});
module.exports = mongoose.model("Domicilio", domicilioSchema);