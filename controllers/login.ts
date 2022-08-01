import { compareSync } from 'bcryptjs';
import { Request, Response } from 'express';
import { User } from '../models';
import jwt from 'jsonwebtoken';

let login = async (req : Request, res : Response) => {
    User.findOne({
        email: req.body.email
        })
        .exec((err, user) => {
        if (err) {
            res.status(500)
            .send({
                message: err
            });
            return;
        }
        if (!user) {
            return res.status(404)
            .send({
                message: "User Not found."
            });
        }
        
        //comparing passwords
        var passwordIsValid = compareSync(
            req.body.password,
            user.password as string
        );
        // checking if password was valid and send response accordingly
        if (!passwordIsValid) {
            return res.status(401)
            .send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        //signing token with user id
        var token = jwt.sign({
            id: user.id
        }, process.env.API_SECRET as string, {
            expiresIn: 86400
        });
    
        //responding to client request with user profile success message and  access token .
        res.status(200)
            .send({
            user: {
                id: user._id,
                email: user.email,
            },
            message: "Login successfull",
            accesstoken: token,
            });
        });
        
}

export default login;