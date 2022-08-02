import { Response, Request } from 'express';
import { Product } from '../models';


let deleteProduct = async (req : Request, res : Response) => {

    try {

        let { id } = req.params;

        let product = await Product.findOne({ _id : id }).populate('category');
    
        res.status(200).send(product);

    } catch (e) {

        res.status(500).send(e);

    }

    
}

export default deleteProduct;

