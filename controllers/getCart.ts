import { Request, Response } from 'express';
import { Cart } from '../models';

let getCart = async (req : Request, res : Response) : Promise<void> => {

    try {

        let { id } = req.params;

        if (req.body.id === id) {
    
            let cart = await Cart.findById(id).populate('products');
    
            res.status(200).send(cart);
    
        } else {
    
            res.sendStatus(403);
    
        }

    } catch (e) {

        res.status(500).send(e);

    }

  


};

export default getCart;

