import { Request, Response } from 'express';

let addProduct = async (req : Request, res : Response) => {

    let { title, price, count, rate, category, image, desc } = req.body;

    res.status(200).send({ title : title, price : price, count : count, rate : rate, category : category, image : image, desc : desc })

}

export default addProduct;