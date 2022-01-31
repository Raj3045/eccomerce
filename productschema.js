const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price: {
        price: Number

    }
});


const products=mongoose.model("products",productSchema);

module.exports= products;