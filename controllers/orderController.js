const Order = require("../db/Models/Order")


exports.createOrder = async (req,res)=>{
    let order = req.body
    let modifyProducts = order.products.map(elem => {
        return {productId:elem._id,quantity:elem.quantity,title:elem.title,image:elem.image,price:elem.price}
        }
        )
    console.log(modifyProducts)
    const newOrder = new Order({userId:order.userId,products:modifyProducts, amount:order.amount })
    console.log(newOrder)
    try {
        const createOrder = await newOrder.save()
        res.status(200).json(createOrder)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({error:true,message:error.message})
    }
}

exports.editOrder = async (req,res)=>{
    try {
        let updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        if (!updatedOrder) return res.status(404).json({error:true,message:"No se encontro el carro"})
        res.status(200).json({error:false,data:updatedOrder})
    } catch (error) {
        res.status(404).json({error:true,message:error.message})        
    }
}

exports.getOrder = async (req,res)=>{
    try{
        //Hay varias ordenes para un usuario
        const orders = await Order.find({userId:req.params.id})
        console.log(orders)
        res.status(200).json({error:false,data:orders})
    }catch(error){
        res.status(404).json({error:true,message:error.message})
    }
}

exports.getAllOrders = async (req,res)=>{
    let id = req.params.id
    try{
        const orders = await Order.find({userId:id}).sort({createdAt:"desc"}).limit(5)
        if (!orders) res.status(404).json([])
        res.status(200).json(orders)
    }catch(err){
        console.log(err.message)
        res.status(404).json(err.message)
    }
}