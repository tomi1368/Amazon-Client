const orderRouter = require("express").Router()
const {protect} = require("../middlewares/auth")
const {createOrder, editOrder, getOrder} = require("../controllers/orderController")

orderRouter.post("/",protect,createOrder)

orderRouter.put("/",protect,editOrder)

orderRouter.get("/find/:id",protect,getOrder)

module.exports = orderRouter