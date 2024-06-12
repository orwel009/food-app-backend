const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const foods= require("./models/food")
const {foodModel}=require("./models/food")

const app = express()

app.use(cors())
app.use(express.json())



app.post("/add",(req,res)=>{
    let input = req.body
    console.log(input)
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("Servrer Started")
})