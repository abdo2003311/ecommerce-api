import { User } from "../models";
import { Request, Response } from 'express';

let getUsers = async (req : Request, res : Response) : Promise<void> => {

    try {
        
        let users = await User.find().populate('cart');

        res.status(200).send(users);

    } catch (e) {

        res.status(500).send(e);

    }

};

export default getUsers;