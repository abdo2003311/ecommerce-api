import { Category, Product } from "../models";
import { Request, Response } from 'express';

let getProductsByCategories = async (req : Request, res : Response) : Promise<void> => {

    let { category } = req.params;

    let categoryFromDb = await Category.findOne({ value : category }) 
    let products = await Product.find({ category : categoryFromDb }).populate('category');

    res.status(200).send(products);

};

export default getProductsByCategories;
