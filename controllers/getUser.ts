import { User } from "../models";
import { Response, Request } from 'express';
import _ from 'lodash';

let getUser = async (req : Request, res : Response) : Promise<void> => {
    
    try {
    
        let { id } = req.params;

        let user = await User.findById(id);
    
        if (req.body.user === null) res.status(200).send(_.pick(user, ["_id", "username"]))
    
        if (req.body.user.role === "admin" || (req.body.user.role === "user" && req.body.user.id === id)) {
            res.status(200).send(user);
        } else {
            res.status(403).send('unauthorized')
        }

    } catch (e) {

        res.status(500).send(e);

    }

};

export default getUser;