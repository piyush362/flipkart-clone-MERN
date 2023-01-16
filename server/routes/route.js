import express from 'express'
import { userSignUp, userLogIn } from '../controller/userControler.js';
import { getProducts, getProductById } from '../controller/productsController.js';

const router = express.Router();

router.post('/signup', userSignUp);

router.post('/login', userLogIn)

router.get('/products', getProducts)

router.get('/product/:id', getProductById)

export default router;