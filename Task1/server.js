const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")
const bcrypt = require("bcryptjs")
const connectDB = require("./config/db")
const { handleError } = require("./services/handleError")

const User = require("./models/userModel")

const app = express()

app.use(cors())
app.use(express.json({ extended: false }))
app.use(morgan("tiny"))

connectDB()

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => res.send("Server Up and running"))
app.use("/api", require("./utils/index.js"))
app.use((err, req, res, next) => {
  handleError(err, req, res)
})

app.listen(PORT, () => {
  console.log("Server(v1.0) is running on ", PORT)
})
