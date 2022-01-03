const authRoute = require("express").Router()
const {registerUser,loginUser} = require("../controllers/authController")


authRoute.post("/register",registerUser)


authRoute.get("/login",loginUser)


module.exports = authRoute