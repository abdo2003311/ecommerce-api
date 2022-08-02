import { Cart } from "../models";
import { Request, Response } from 'express';

let getCarts = async (req : Request, res : Response) : Promise<void> => {

    try {

        let carts = await Cart.find().populate('products');

        res.status(200).send(carts);

    } catch (e) {

        res.status(500).send(e);

    }

};

export default getCarts;
