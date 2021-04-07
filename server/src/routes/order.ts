import { Router } from 'express';
import { OrderController } from '../controllers';

const { addOrder, confirmOrder } = OrderController;

const router = Router();

router.post('/order', addOrder);
router.put('/order', confirmOrder);
export = router;
