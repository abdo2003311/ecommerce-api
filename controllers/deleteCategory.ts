import { Response, Request } from 'express';
import { Category } from '../models';


let deleteCategory = async (req : Request, res : Response) => {

    let { category } = req.params;

    let categoryFromDb = await Category.findOne({ value : category });

    res.status(200).send(categoryFromDb);
    
}

export default deleteCategory;