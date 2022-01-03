const Order = require("../db/Models/Order")


exports.createOrder = async ()=>{
    const newOrder = new Order(req.body)
    try {
        const createOrder = await newOrder.save()
        res.status(200).json({error:false,data:createOrder})
    } catch (error) {
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

exports.getOrder = async ()=>{
    try{
        //Hay varias ordenes para un usuario
        const orders = await Order.find({userId:req.params.id})
        res.status(200).json({error:false,data:orders})
    }catch(error){
        res.status(404).json({error:true,message:error.message})
    }
}