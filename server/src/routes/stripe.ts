import { Router } from 'express';
import { StripeController } from '../controllers';

const { checkoutSesion } = StripeController;
const router = Router();

router.post('/create-payment-intent', checkoutSesion);

export = router;
