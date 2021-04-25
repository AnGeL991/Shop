import { Router } from 'express';
import { AwsController } from '../controllers';

const { awsController } = AwsController;

const router = Router();

router.get('/oauth/cognito', awsController);
export = router;
