import { Request, Response } from 'express';
import { Product } from '../models';

let updateProduct = async (req : Request, res : Response) => {

    let { id } = req.params;

    let product = await Product.findById(id);

    if (!product) {

        res.status(404).send('not found');
        
        return;

    }

    let { title, price, count, rate, category, image, desc } = req.body;

    product.title = title;
    product.price = price;
    product.count = count;
    product.rate = rate;
    product.category = category;
    product.image = image;
    product.desc = desc;
    
    res.status(200).send(product)

}

export default updateProduct;