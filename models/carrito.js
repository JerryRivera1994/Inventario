const {Schema, model} = require('mongoose')

const carritoShema = new Schema(
    {
        detalle:
                [
                    {
                        "product":{
                            type: Number
                        }                        
                    }
                ],
        usuario:{
            type:Number,
        },
        estado:{
            type:Boolean,
            default:true
        }
    }
)

module.exports = model("Carrito",carritoShema)