const jwt_decode = require ('jwt-decode')
const Carrito = require('../models/carrito')

module.exports.verifyCarrito = async (req,res,next) =>{
    const carrito = await Carrito.findOne({usuario:req.body.id_user},{estado:true})
    if (carrito){
        carrito.updateOne({},{detalle:{product:req.product}});
        return res.status(200).json({message:'Se agregó al carrito de compras el producto'})
    }
    next();
} 