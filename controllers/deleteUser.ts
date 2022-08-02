import { User } from "../models";
import { Request, Response } from 'express';

let deleteUser = async (req : Request, res : Response) : Promise<void> => {

    try {

        let { id } = req.params;

        if (id === req.body.user.id) {
    
            let user = await User.findById(id);
    
            res.status(200).send(user);
    
        } else {
    
            res.sendStatus(403);
    
        }

    } catch (e) {

        res.status(500).send(e);

    }


};

export default deleteUser;