import { Router } from 'express';
import { OrderController } from '../controllers';

const { addOrder } = OrderController;

const router = Router();

router.post('/order', addOrder);

export = router;
