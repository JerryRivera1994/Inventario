const Product = require('../models/product')

module.exports.productoRegister = async (req,res) =>{
    try{
        const {name, product, price, description,proveedor,stock, img} = req.body;


        const newProduct = new Product(
            {
                name,
                price,
                description,
                proveedor,
                stock,
                img
            }
        )
    
        const saveProduct = await newProduct.save();
    
        res.status(201).json({"msg":"Producto se registró correctamente"});  
    }
    catch(error){
        res.status(400).json({"msg":"Producto no se registró"});  
    }
}

module.exports.product_view = async (req, res) =>{
    try {
        const product = await Product.find().exec()
        if(!product.length) {
            message = 'No existen registros';
        }
        return res.status(200).json({
          product
        });
    }
    catch(e) {
        return res.status(500).json({
            message:'Error en la consulta'
        });
    }
}

module.exports.product_view_id = async (req, res) =>{
    try {
        const product = await Product.findOne({"_id":req.params._id})
        if(!product.length) {
            message = 'No existen registros';
        }
        return res.status(200).json({
          product
        });
    }
    catch(e) {
        return res.status(500).json({
            message:'Error en la consulta'
        });
    }
}
