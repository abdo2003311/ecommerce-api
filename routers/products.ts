import { addCategory, addProduct, deleteCategory, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers";
import express from 'express';
import getProductsByCategories from "../controllers/getProductsByCategory";
import updateCategory from "../controllers/updateCategory";
import adminAuthorization from "../controllers/adminAuthorization";
const productsRouter = express.Router();

productsRouter.get('/:id', getProduct);
productsRouter.get('/', getProducts);
productsRouter.get('/category/:category', getProductsByCategories);
productsRouter.delete('/category/:category',adminAuthorization, deleteCategory);
productsRouter.put('/category/:category',adminAuthorization, updateCategory);
productsRouter.post('/category',adminAuthorization, addCategory);
productsRouter.delete('/:id',adminAuthorization, deleteProduct);
productsRouter.put('/:id',adminAuthorization, updateProduct);
productsRouter.post('/',adminAuthorization, addProduct);

export default productsRouter;
