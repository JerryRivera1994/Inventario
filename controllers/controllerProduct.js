const Product = require('../models/Product')

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
    res.status(201).json({"msg":"Producto registró correctamente"});  
}