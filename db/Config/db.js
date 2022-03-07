const mongoose = require("mongoose")


const connectDB = async ()=>{
    console.log(process.env.NODE_ENV=="test",process.env.MONGO_URI_TEST)
    await mongoose.connect(process.env.NODE_ENV=="test" ? process.env.MONGO_URI_TEST : process.env.MONGO_URI ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(res=> console.log("Connect to Mongo"))
    .catch(err=>console.log("Not connection to Mongo"))
    
}


module.exports = connectDB