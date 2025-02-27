const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MongoDB connected successfully");
    }).catch((er)=>{
        console.log("MongoDB connection failed.Something went wrong",er);
    })
}