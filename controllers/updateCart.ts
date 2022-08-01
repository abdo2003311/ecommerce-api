import { Request, Response } from 'express';
import { User } from '../models';

let updateCart = async (req : Request, res : Response) => {

    let { userId } = req.params;

    let user = await User.findById(userId);

    if (!user) {

        res.status(404).send("not found");

        return;
        
    }

    let { products } = req.body;



    res.status(200).send({ products : products, userId : userId })

}

export default updateCart;