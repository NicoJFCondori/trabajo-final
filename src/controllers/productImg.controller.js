const catchError = require('../utils/catchError');
const ProductImg = require('../models/ProductImg');

const getAll = catchError(async (req, res) => {
  const result = await ProductImg.findAll()
  return res.json(result)
});

const create = catchError(async (req, res) => {
  const { filename } = req.file

  return res.sendStatus(201)

})

module.exports = {
  getAll,
  create
}