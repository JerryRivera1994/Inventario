const {Router} = require('express')
const router = Router()
const controllerCarrito = require('../controllers/controllerCarrito')
const carrito = require('../middlewares/carrito')

router.post('/carrito',carrito.verifyCarrito,controllerCarrito.carritoRegister)
router.get('/carrito/:_id',controllerCarrito.carrito_view)

module.exports.carritoRoutes = router;