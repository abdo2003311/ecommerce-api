import { Cart } from "../models";
import { Request, Response } from 'express';

let getCarts = async (req : Request, res : Response) : Promise<void> => {

    let carts = await Cart.find().populate('products');

    res.status(200).send(carts);

};

export default getCarts;
