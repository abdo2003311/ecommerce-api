import { Request, Response } from 'express';

let addCategory = async (req : Request, res : Response) => {

    let { newCategory } = req.body;

    res.status(200).send(newCategory)

}

export default addCategory;