import { Schema, model } from 'mongoose';

let categorySchema =  new Schema({
    value : {
        type : String,
        required : true
    }
});


let Category = model('Category', categorySchema);

export default Category;
