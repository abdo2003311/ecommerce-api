import { Request, Response } from 'express';
import { Category } from '../models';

let updateCategory = async (req : Request, res : Response) => {

    let { newCategory, oldCategory } = req.body;

    let category = await Category.findOne({ value : oldCategory });

    if (!category) {

        res.status(404).send('not found')

        return;

    }

    res.status(200).send(newCategory)


}

export default updateCategory;