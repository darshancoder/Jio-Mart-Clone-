const express = require("express")
require("dotenv").config()
const {connect } = require("./Config/db")


const app = express()

app.get("/",(req,res) => {
    res.send("Welcome Home to Frontend")
    console.log("Welcome Home");
})

app.listen(process.env.PORT, async() => {
    try{
        await connect()
        console.log("Database is connected to Sucessss.....");

    }catch(e){
        console.log("Database is connected to failed!!!!!")
    }
    console.log(`http://localhost:${process.env.PORT}`);
})