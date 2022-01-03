const mongoose = require("mongoose")


const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(res=> console.log("Connect to Mongo"))
    .catch(err=>console.log("Not connection to Mongo"))
    
}


module.exports = connectDB