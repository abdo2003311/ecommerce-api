import { Request, Response } from 'express';
import { Product } from '../models';

let getProduct = async (req : Request, res : Response) : Promise<void> => {

    let { id } = req.params;

    let product = await Product.findById(id).populate('category');

    res.status(200).send(product);

};

export default getProduct;

