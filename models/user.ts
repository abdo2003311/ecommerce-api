import { Schema, model, SchemaTypes } from 'mongoose';

let userSchema =  new Schema({
    username : {
        required : true,
        unique : true,
        type : String,
        minlength : 5,
        maxlength : 20
    },
    email : {
        required : true,
        unique : true,
        type : String,
        minlength : 10,
        maxlength : 50
    },
    password : {
        required : true,
        type : String,
    }, 
    firstname : {
        required : true,
        type : String,
        minlength : 3,
        maxlength : 20
    },
    lastname : {
        required : true,
        type : String,
        minlength : 3,
        maxlength : 20
    },
    cart : {
        required : true,
        type : SchemaTypes.ObjectId,
        ref : 'Cart'
    },
    phone : {
        type : String,
        required : true
    },
    address : {
        city : {
            required : true,
            type : String,
            minlength : 3,
            maxlength : 20  
        },
        street : {
            required : true,
            type : String,
            minlength : 3,
            maxlength : 20  
        }
    }
});

let User = model('User', userSchema);

export default User;
