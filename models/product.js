const {Schema, model} = require('mongoose')

const productShema = new Schema(
    {
        name:{
            type:String,
            require:[true, 'El nombre del producto es requerido']
        },
        price:{
            type:String,
            require:[true, 'El precio del producto es requerido']
        },
        description:{
            type:String,
        },
        proveedor:{
            type:String,
            require:[true,'El proveedor es requerido']
        },
        stock:{
            type: int,
            require:[true,'El stock es requerido']
        },
        img:{
            type:String,
        }
    }
)

module.exports = model("Product",productShema)