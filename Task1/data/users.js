import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    contact: "9999999999",
    isAdmin: true,
  },
  {
    name: "First User",
    email: "first@example.com",
    password: bcrypt.hashSync("first", 10),
    contact: "8888888888",
  },
  {
    name: "Second User",
    email: "second@example.com",
    password: bcrypt.hashSync("second", 10),
    contact: "7777777777",
  },
  {
    name: "Third User",
    email: "third@example.com",
    password: bcrypt.hashSync("third", 10),
    contact: "6666666666",
  },
  {
    name: "Fourth User",
    email: "fourth@example.com",
    password: bcrypt.hashSync("fourth", 10),
    contact: "5555555555",
  },
]

export default users
