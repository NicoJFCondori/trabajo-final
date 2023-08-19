const request = require("supertest")
const app = require("../app")
const Product = require("../models/Product")

const URL_BASE_USERS = "/api/v1/users"

let TOKEN
let productBody
let product


beforeAll(async () => {
    const user = {
        email: "nico@gmail.com",
        password: "nico1234"
      }
  const res = await request(app)
    .post(`${URL_BASE_USERS}/login`)
    .send(user)

  TOKEN = res.body.token

  productBody = {
    title: "productTest",
    description: "lorem20",
    price: 23
  }

  product = await Product.create(productBody)

})