import express from 'express';
import { UserController } from '../controllers';
import { extractJWT } from '../middlewares';

const router = express.Router();
const { register, login, getUser } = UserController;

router.get('/users/validate-Token', extractJWT, getUser);
router.post('/users/register', register);
router.post('/users/login', login);

export = router;
