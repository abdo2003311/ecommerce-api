import { Request, Response } from 'express';
import { Category } from '../models';

let getCategories = async (req : Request, res : Response) => {
    
    try {

        let categories = await Category.find();

        res.status(200).send(categories)

    } catch (e) {

        res.status(500).send(e);

    }

}

export default getCategories;