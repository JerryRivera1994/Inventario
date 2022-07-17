const {Router} = require('express')
const router = Router()
const controllerProduct = require('../controllers/controllerProduct')
const product = require('../middlewares/product')

router.post('/product',product.verifyProduct,controllerProduct.productoRegister)
router.get('/product',controllerProduct.product_view)
router.get('/product/:_id',controllerProduct.product_view_id)

module.exports.productRoutes = router;