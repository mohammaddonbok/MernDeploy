const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"You must insert the title"],
        minlength:[3,"title must be at least 3 characters long"]
    },
    price:{
        type:Number,
        required:[true,"You must insert the price"],
    },
    description:{
        type:String,
        required:[true,"You must insert the description"],
        minlength:[5,"description must be at least 5 characters long"]
    }
},
{timestamps: true}
);

const products = mongoose.model("products", ProductSchema);

module.exports = products;