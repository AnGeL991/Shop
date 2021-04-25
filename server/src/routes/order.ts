import { Router } from 'express';
import { OrderController } from '../controllers';
import { extractJWT } from '../middlewares';

const { addOrder, confirmOrder, getOrders, getOneOrder } = OrderController;

const router = Router();

router.post('/order', addOrder);
router.put('/order', confirmOrder);
router.post('/order/get', getOrders);
router.post('/order/getOne', extractJWT, getOneOrder);
export = router;
