
const { getAll, create, remove, update } = require('../controllers/cart.controller');
const express = require('express');

const routerCart = express.Router();

routerCart.route('/') // 🔐🔐🔐🔐🔐🔐🔐
  .get(getAll)
  .post(create);

routerCart.route('/:id') // 🔐🔐🔐🔐🔐🔐🔐
  .delete(remove)
  .put(update);

module.exports = routerCart;