const { getAll, create } = require('../controllers/productImg.controller');
const express = require('express');
const upload = require('../utils/multer');

const routerProductImg = express.Router();

routerProductImg.route('/')
  .get(getAll)
  .post(upload.single('image'), create)

module.exports = routerProductImg;