const mongoose = require("mongoose");

//uri = "mongodb+srv://piyukothawade:Kothawade123@cluster0.vblpro2.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB = (uri) => {
    //console.log("connect db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
     
};

module.exports = connectDB;
