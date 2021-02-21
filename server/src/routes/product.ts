import express from 'express';
import controller from '../controllers/product';

const router = express.Router();

router.post('/products',controller.addProduct);
router.get('/products',controller.getAllProduct);

export = router;