import { Request, Response } from 'express';
import { Cart, User } from '../models';
import { sign } from 'jsonwebtoken';
let addUser = async (req : Request, res : Response) => {

    try {

        let { username, firstname, lastname, password, phone, city, street, email } = req.body;

        let cart = await Cart.create({});
    
        let user = await User.create({ username : username, firstname: firstname, lastname : lastname, password : password, phone : phone, cart : cart, address : {
            city : city, 
            street: street
        }, email : email })
    
        let token = sign({
            _id : user._id
        }, process.env.API_SECRET as string);
    
        await User.findByIdAndDelete(user._id)
        await Cart.findByIdAndDelete(cart._id)
    
        res.status(200).send({
            accesstoken : token
        });

    } catch (e) {

        res.status(500).send(e);

    }

}

export default addUser;