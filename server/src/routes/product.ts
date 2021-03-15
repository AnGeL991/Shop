import { Router } from 'express';
import { ControllerProduct } from '../controllers';

const { addProduct, getAllProduct } = ControllerProduct;
const router = Router();

router.post('/products', addProduct);
router.get('/products', getAllProduct);

export = router;
