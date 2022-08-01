import { User } from "../models";
import { Request, Response } from 'express';

let getUser = async (req : Request, res : Response) : Promise<void> => {

    let { id } = req.params;

    let user = await User.findById(id);

    res.status(200).send(user);

};

export default getUser;