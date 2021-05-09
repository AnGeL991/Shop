import { Router } from 'express';
import { OrderController } from '../controllers';
import { extractJWT } from '../middlewares';

const { addOrder, confirmOrder, confirmPayment, getOrders, getOneOrder } = OrderController;

const router = Router();

router.post('/order', addOrder);
router.put('/order/confirm', confirmOrder);
router.put('/order/payment', confirmPayment);
router.post('/order/get', getOrders);
router.post('/order/getOne', extractJWT, getOneOrder);
export = router;
