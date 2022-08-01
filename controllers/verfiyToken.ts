import { Request, Response } from 'express';
import jwt from "jsonwebtoken";

const verifyToken = (req : Request, res : Response, next: () => void) => {
    jwt.verify(req.headers.accesstoken as string, process.env.API_SECRET as string, function (err, decode : any) {
        if (req.params.id === decode.id) {
            next();
        } else {
            res.status(403).send('not Authorized')
        }
      });
}
export default verifyToken;