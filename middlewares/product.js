const jwt_decode = require ('jwt-decode')
const Product = require('../models/product')

module.exports.verifyProduct = async (req,res,next) =>{
    const product = await Product.findOne({name:req.name})
    if(product) return res.status(400).json({message:'The product exists'})

    next();
} 