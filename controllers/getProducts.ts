import { Product } from "../models";
import { Request, Response } from 'express';

let getProducts = async (req : Request, res : Response) : Promise<void> => {

    try {
    
        let products = await Product.find().populate('category');

        res.status(200).send(products);

    } catch (e) {

        res.status(500).send(e);

    }

};

export default getProducts;
