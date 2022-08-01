import { Request, Response } from 'express';
import jwt from "jsonwebtoken";

const adminAuthorization = (req : Request, res : Response, next: () => void) => {
    jwt.verify(req.headers.accesstoken as string, process.env.API_SECRET as string, function (err, decode : any) {
        console.log(decode)
        if ('admin' === decode.username && 'admin' === decode.password) {
            next();
        } else {
            res.status(403).send('not Authorized')
        }
      });
}
export default adminAuthorization;