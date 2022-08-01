import { addUser, deleteUser, getCart, getUser, getUsers, login, updateCart, updateUser, verifyToken } from "../controllers";
import express from 'express';
import adminAuthorization from "../controllers/adminAuthorization";
const usersRouter = express.Router();

usersRouter.get('/:id', verifyToken, getUser);
usersRouter.get('/', adminAuthorization, getUsers);
usersRouter.delete('/:id', verifyToken, deleteUser);
usersRouter.put('/:id', verifyToken, updateUser);
usersRouter.put('/:id/cart', verifyToken, updateCart);
usersRouter.get('/:id/cart', verifyToken, getCart);
usersRouter.post('/', addUser);
usersRouter.post('/login', login);


export default usersRouter;
