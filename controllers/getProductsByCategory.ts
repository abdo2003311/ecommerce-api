import { Category, Product } from "../models";
import { Request, Response } from 'express';

let getProductsByCategories = async (req : Request, res : Response) : Promise<void> => {

    try {
    
        let { category } = req.params;

        let categoryFromDb = await Category.findOne({ value : category }) 
        let products = await Product.find({ category : categoryFromDb }).populate('category');
    
        res.status(200).send(products);

    } catch (e) {

        res.status(500).send(e);

    }

};

export default getProductsByCategories;
