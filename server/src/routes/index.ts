import { Router } from 'express';
import productRoutes from './product';
import userRoutes from './user';
import stripeRoutes from './stripe';
import orderRoutes from './order';
import AWSRouter from './aws';
const router = Router();

router.use(productRoutes);
router.use(userRoutes);
router.use(stripeRoutes);
router.use(orderRoutes);
router.use(AWSRouter);
export = router;
