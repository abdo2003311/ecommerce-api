import { Schema, model, SchemaTypes } from 'mongoose';

let productSchema =  new Schema({
    title : {
        type : String,
        minlength : 3
    },
    desc : {
        type : String,
        required : true,
        minlength : 20
    },
    price : {
        type : Number,
        required : true,
        min : 1,
        max : 100000
    },
    rate : {
        type : Number,
        required : true,
        min : 0,
        max : 5
    },
    count : {
        type : Number,
        required : true,
        min : 1,
        max : 1000
    },
    image : {
        type : String,
        required : true,
    },
    category : {
        type : SchemaTypes.ObjectId,
        ref : 'Category',
    }
});


let Product = model('Product', productSchema);

export default Product;
