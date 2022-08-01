import { User } from "../models";
import { Request, Response } from 'express';

let getUsers = async (req : Request, res : Response) : Promise<void> => {

    let users = await User.find().populate('cart');

    res.status(200).send(users);

};

export default getUsers;