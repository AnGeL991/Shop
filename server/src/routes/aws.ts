import { Router } from 'express';
import { AwsController } from '../controllers';
import { awsExtractJWT } from '../middlewares';
const { signIn, signUp, setUp, forgotPassword, confirmPassword } = AwsController;

const router = Router();

router.post('/cognito/signUp', signUp);
router.post('/cognito/signIn', signIn);
router.post('/cognito/forgot-password', forgotPassword);
router.post('/cognito/confirm-password', confirmPassword);
router.post('/cognito/setUp', awsExtractJWT, setUp);

export = router;
