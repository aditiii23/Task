const express = require("express")
const bcrypt = require("bcryptjs")

const router = express.Router()

const signUp = require("../controllers/user/signup")
const signIn = require("../controllers/user/signin")
const userDetails = require("../controllers/user/userDetails")
const userAuth = require("../middlewares/userAuth")

router.post("/signup", (req, res, next) => {
  signUp(req, res, next)
})
router.post("/signin", (req, res, next) => {
  signIn(req, res, next)
})
router.get("/userdetails", userAuth, (req, res, next) => {
  userDetails(req, res, next)
})

module.exports = router
