import { Product } from "../models";
import { Request, Response } from 'express';

let getProducts = async (req : Request, res : Response) : Promise<void> => {

    let products = await Product.find().populate('category');

    res.status(200).send(products);

};

export default getProducts;
