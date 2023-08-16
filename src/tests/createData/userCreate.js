const User = require("../../models/User")

const userCreate = async () => {

  const user = {
    firstName: "Nicolas",
    lastName: "Condori",
    email: "nico@gmail.com",
    password: "nico1234",
    phone: "+54965"
  }

  await User.create(user)

}

module.exports = userCreate