import { Request, Response } from 'express';
import { User } from '../models';

let updateCart = async (req : Request, res : Response) => {

    try {

        let { userId } = req.params;

        if (req.body.id === userId) {
    
            let user = await User.findById(userId);
    
            if (!user) {
        
                res.status(404).send("not found");
        
                return;
                
            }
        
            let { products } = req.body;
        
            res.status(200).send({ products : products, userId : userId });
    
        } else {
    
            res.sendStatus(403);
    
        }

    } catch (e) {

        res.status(500).send(e);

    }

}

export default updateCart;