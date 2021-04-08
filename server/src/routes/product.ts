import { Router } from 'express';
import { ControllerProduct } from '../controllers';

const { addProduct, getAllProduct, addComment } = ControllerProduct;
const router = Router();

router.post('/products', addProduct);
router.get('/products', getAllProduct);
router.put('/products', addComment);

export = router;
