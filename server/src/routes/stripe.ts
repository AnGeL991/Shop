import { Router } from 'express';
import { StripeController } from '../controllers';

const { checkoutSesion, webhookHandler } = StripeController;
const router = Router();

router.post('/create-payment-intent', checkoutSesion);
router.post('/webook', webhookHandler);

export = router;
