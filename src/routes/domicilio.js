const express = require("express");
const router = express.Router(); //manejador de rutas de express
const domicilioSchema = require("../models/domicilio");


//Nuevo domicilio
router.post("/domicilios", (req, res) => {
    const domicilio = domicilioSchema(req.body);
    domicilio
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;


router.get("/domicilios",(req, res) => {
    domicilioSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un domicilio por su id
router.get("/domicilios/:id", (req, res) => {
    const { id } = req.params;
    domicilioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar el nombre de un domicilio por su id
router.put("/domicilios/:id", (req, res) => {
    const { id } = req.params;
    const { Codigo_Pedido, Direccion, Nombre, Telefono,Modo_Pago,Costo_Total,Detalle_Pedido } = req.body;
    domicilioSchema
        .updateOne({ _id: id }, {
            $set: { Codigo_Pedido, Direccion, Nombre, Telefono,Modo_Pago,Costo_Total,Detalle_Pedido }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar un domicilio por su id

router.delete("/domicilios/:id", (req, res) => {
    const { id } = req.params;
    domicilioSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});