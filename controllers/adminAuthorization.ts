import { Request, Response } from 'express';
import { User } from '../models';

let adminAuthorization = async (req : Request, res : Response, next: () => void ): Promise<void> => {

    try {

        let admin = await User.findOne({ role : "admin" });

        if (admin?._id.toString() === req.body.user.id) {
            next();
        } else {
            res.status(403).send('unAuth')
        }

    } catch (e) {

        res.status(500).send(e);

    }

}

export default adminAuthorization