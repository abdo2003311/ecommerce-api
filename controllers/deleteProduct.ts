import { Response, Request } from 'express';
import { Product } from '../models';


let deleteProduct = async (req : Request, res : Response) => {

    let { id } = req.params;

    let product = await Product.findOne({ _id : id }).populate('category');

    res.status(200).send(product);
    
}

export default deleteProduct;

