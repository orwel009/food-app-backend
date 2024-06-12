
const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "category":{type:String,required:true},
        "price":{type:String,required:true},
        "rating":{type:String,required:true},
        "image":{type:String,required:true}
    }
)

let foodModel = mongoose.model("foods",schema)
module.exports = {foodModel}
