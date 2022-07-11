const {Router} = require('express')
const router = Router()
const controllerProduct = require('../controllers/controllerProduct')
const product = require('../middlewares/product')

router.post('/product',product.verifyProduct,controllerProduct.productoRegister)

module.exports.productRoutes = router;