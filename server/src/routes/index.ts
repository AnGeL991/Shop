import { Router } from 'express';
import productRoutes from './product';
import userRoutes from './user';
import stripeRoutes from './stripe';
import orderRoutes from './order';

const router = Router();

router.use(productRoutes);
router.use(userRoutes);
router.use(stripeRoutes);
router.use(orderRoutes);

export = router;
