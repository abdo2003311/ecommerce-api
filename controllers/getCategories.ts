import { Request, Response } from 'express';
import { Category } from '../models';

let getCategories = async (req : Request, res : Response) => {

    let categories = await Category.find();

    res.status(200).send(categories)

}

export default getCategories;