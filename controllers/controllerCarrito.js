const Carrito = require('../models/carrito')
const jwt_decode = require ('jwt-decode')

module.exports.carritoRegister = async (req,res) =>{
    try{
        const {detalle,id_user} = req.body;
        const newCarrito= new Carrito(
            {
                detalle,
                usuario:id_user 
            }
        )
        console.log(newCarrito)
        const savedCarrito = await newCarrito.save();
        res.status(201).json({"msg":"Se creo otro carrito de compras"})
    }
    catch(error){
        res.status(400).json({"msg":"Ha ocurrido un error al momento de crear un carrito de compras"})
    }
}

module.exports.carrito_view = async (req, res) =>{
    try {
        const carrito = await Carrito.findOne({"_id":req.params._id})
        if(!carrito.length) {
            message = 'No existen registros';
        }
        return res.status(200).json({
          carrito
        });
    }
    catch(e) {
        return res.status(500).json({
            message:'Error en la consulta'
        });
    }
}
