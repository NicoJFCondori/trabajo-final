const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = require('./user.router');
const routerCategory = require('./category.router');
const routerProduct = require('./product.router');
const routerCart = require('./cart.router');
const routerPurchase = require('./purchase.router');

const router = express.Router();

// colocar las rutas aquí
router.use("/users", routerUser)
router.use("/categories", routerCategory)
router.use("/products", routerProduct)
router.use("/cart", verifyJWT, routerCart) // 🔐🔐🔐🔐🔐🔐🔐
router.use("/purchase", verifyJWT, routerPurchase) // 🔐🔐🔐🔐🔐🔐🔐


module.exports = router;