const mongoose = require("mongoose");

module.exports = DbConnect = ()=>{
    const dbUrl = process.env.DB_URL

    mongoose.connect(dbUrl).then(()=>{
        console.log("DataBase connection successful ");
    }).catch((e)=>{
        console.log("no connection");
    })
}