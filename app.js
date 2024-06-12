const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const foods= require("./models/food")
const {foodModel}=require("./models/food")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://orwel000:orwel123@cluster0.hyugd.mongodb.net/foodDB?retryWrites=true&w=majority&appName=Cluster0")



app.post("/add",(req,res)=>{
    let input = req.body
    let food = new foodModel(input)
    food.save()
    res.json({"status":"success"})
})


app.listen(8080,()=>{
    console.log("Servrer Started")
})