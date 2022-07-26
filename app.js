const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {productRoutes} = require('./routes/product.routes')
const {carritoRoutes} = require('./routes/carrito.routes')

const app = express();

app.use(morgan('dev'));

app.use(express.json())


const jsonParser = bodyParser.json()

app.use('/api',jsonParser,productRoutes);  
app.use('/api',jsonParser,carritoRoutes);  

module.exports.app = app;