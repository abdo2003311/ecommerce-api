import { verifyToken, getProductsByCategory ,addCategory, addProduct, deleteCategory, deleteProduct, getProduct, getProducts, updateCategory, updateProduct, adminAuthorization } from "../controllers";
import express from 'express';
const productsRouter = express.Router();

productsRouter.get('/:id', getProduct);
productsRouter.get('/', getProducts);
productsRouter.get('/category/:category', getProductsByCategory);
productsRouter.delete('/category/:category', verifyToken, adminAuthorization, deleteCategory);
productsRouter.put('/category/:category', verifyToken, adminAuthorization, updateCategory);
productsRouter.post('/category', verifyToken, adminAuthorization, addCategory);
productsRouter.delete('/:id', verifyToken, adminAuthorization, deleteProduct);
productsRouter.put('/:id', verifyToken, adminAuthorization, updateProduct);
productsRouter.post('/', verifyToken, adminAuthorization, addProduct);

export default productsRouter;
