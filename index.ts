import { hashSync } from 'bcryptjs';
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import { urlencoded, json } from 'express';
import cors from 'cors';
require('dotenv').config();

const PORT : string = process.env.PORT as string;
const DATABASE : string = process.env.DATABASE as string;

app.use(urlencoded({ extended : false }), json());
app.use(express.static('public'));
app.use(cors());


// connecting the DATABASE

mongoose.connect(DATABASE, () => {
    console.log(`connected to ${DATABASE}`);
});

// starting the server

app.listen(PORT, () => console.log(`listening to port ${PORT}`));

import { CATEGORIES, PRODUCTS, USERS } from './data';
import { Cart, Category, Product, User } from './models';
import { productsRouter, usersRouter } from './routers';
import { adminLogin } from './controllers';

// creating database

CATEGORIES.forEach(async (category) => {
    await Category.create({
        value : category.value
    });
});

setTimeout(() => {
    PRODUCTS.forEach(async (product) => {

        try {
    
            let category = await Category.findOne({
                value : product.category.value
            })
        
            await Product.create({
                title : product.title,
                category : category,
                price : product.price,
                rate : product.rate,
                count : product.count,
                image : product.image,
                desc : product.desc
            });
        } catch (e) {
    
            console.log(e)
    
        }
     
    });
    
    
}, 500)

setTimeout(() => {
    USERS.forEach(async (user) => {
    
        try {
    
            let product = (products: string | any[]) => {
                return (
                    {
                        id : products[Math.floor(Math.random() * products.length)]._id,
                        quantity : Math.ceil(Math.random() * 10),
                    }
                )
            }
    
            let products = await Product.find();
    
            let cart = await Cart.create({
                userId : null,
                products : [product(products), product(products), product(products)]
            });
        
            let createdUser = await User.create({
                username : user.username,
                cart : cart,
                email : user.email,
                password : hashSync(user.password, 8),
                firstname : user.firstname,
                lastname : user.lastname,
                phone : user.phone,
                address : {
                    city : user.address.city,
                    street : user.address.street
                }
            });
    
            cart.userId = createdUser._id;
    
            await cart.save();
    
        } catch (e) {
    
            console.log(e)
    
        }
     
    });
    
}, 1000)



app.post('/adminLogin', adminLogin);
app.use('/api/products/', productsRouter);
app.use('/api/users/', usersRouter);

