import { Request, Response } from 'express';
import { User } from '../models';

let updateUser = async (req : Request, res : Response) => {

    try {

        let { id } = req.params;

        if (req.body.user.id === id) {

            let user = await  User.findById(id).populate('cart');

            if (!user) {

                res.status(404).send("not found");

                return;

            }

            let { username, firstname, lastname, password, phone, address, email } = req.body;

            
            user.username = username;
            user.firstname = firstname;
            user.lastname = lastname;
            user.password = password;
            user.phone = phone;
            user.address = address;
            user.email = email;

            res.status(200).send(user);

        } else {

            res.sendStatus(403);

        }

    } catch (e) {

        res.status(500).send(e);

    }
    
}

export default updateUser;