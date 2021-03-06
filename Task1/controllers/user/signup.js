const bcrypt = require("bcryptjs")
const User = require("../../models/userModel")
const { ErrorHandler } = require("../../services/handleError")

const handleSignUp = async (req, res, next) => {
  try {
    const { name, email, password, contact } = req.body
    if (!name || !email || !password || !contact) {
      throw new ErrorHandler(400, "Fields Cannot be empty")
    }

    const exists = await User.findOne({ email: email.toLowerCase() })
    if (exists) throw new ErrorHandler(409, "Email already Exists")

    const hash = await bcrypt.hash(password, 10)
    await User.create({ name, email, password: hash, contact })
    res
      .status(200)
      .json({ icon: "sucess", title: "Account Created Successfully" })
  } catch (err) {
    next(err)
  }
}

module.exports = handleSignUp
