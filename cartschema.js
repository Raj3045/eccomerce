const mongoose=require("mongoose");

const cartSchema = new mongoose.Schema({
    user:[ {
        type: 'ObjectId',
        ref: 'userModel',
        // required: true 
    }],
    cartItems: [
        {
            
            product: {
                //type:"ObjectId",
                //ref:'products'
                name:String
                
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                price: Number
        
            }
        }
    ]
    
});

let Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;