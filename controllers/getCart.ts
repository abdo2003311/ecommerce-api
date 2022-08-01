import { Request, Response } from 'express';
import { Cart } from '../models';

let getCart = async (req : Request, res : Response) : Promise<void> => {

    let { id } = req.params;

    let cart = await Cart.findById(id).populate('products');

    res.status(200).send(cart);

};

export default getCart;

