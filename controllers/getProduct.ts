import { Request, Response } from 'express';
import { Product } from '../models';

let getProduct = async (req : Request, res : Response) : Promise<void> => {

    try {

        let { id } = req.params;

        let product = await Product.findById(id).populate('category');
    
        res.status(200).send(product);

    } catch (e) {

        res.status(500).send(e);

    }

};

export default getProduct;

