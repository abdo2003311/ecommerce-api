import { Schema, model, SchemaTypes } from 'mongoose';

let cartSchema =  new Schema({
    userId : {
        type : SchemaTypes.ObjectId,
        ref : 'User'
    },
    products : [{
        id : {
            type :  SchemaTypes.ObjectId,
            ref : 'Product'
        },
        quantity : { 
            type : Number,
            required : true,
            minlength : 1
        }
    }]
});


let Cart = model('Cart', cartSchema);

export default Cart;