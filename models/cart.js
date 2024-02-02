
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    productId : {
        type : String,
        required : true
    }
})

const Cart = mongoose.models['Cart'] || mongoose.model('Cart', cartSchema);
export default Cart;