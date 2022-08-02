import { Response, Request } from 'express';
import { Category } from '../models';


let deleteCategory = async (req : Request, res : Response) => {
    
    try {

        let { category } = req.params;

        let categoryFromDb = await Category.findOne({ value : category });
    
        res.status(200).send(categoryFromDb);

    } catch (e) {

        res.status(500).send(e);

    }

}

export default deleteCategory;