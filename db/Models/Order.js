const mongoose = require("mongoose")
const {Schema,model} = mongoose

const OrderSchema = new Schema({
    userId:{
        type:String,
        unique:true
    },
    products:[
        {
            productId:{
                type:String,
                unique:true
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        default:"Pending"
    }
})

const Order = model("Order",OrderSchema)


module.exports = Order