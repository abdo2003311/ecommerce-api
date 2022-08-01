import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';

let adminLogin = async (req : Request, res : Response) => {

    let { username, password } = req.body;

    if (username === 'admin' && password == 'admin') {
        let token = sign({
            username : 'admin',
            password : 'admin'
        }, process.env.API_SECRET as string);
        res.status(200).send({
            accesstoken : token
        });
    } else {
        res.status(400).send("Worng password or username");
    }

}

export default adminLogin;