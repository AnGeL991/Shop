import express from 'express';
import { UserController } from '../controllers';
import { extractJWT } from '../middlewares';
import { validateLogin, validateSign, forgetPasswordValidator, resetPasswordValidator } from '../validator/index';
const router = express.Router();
const { register, login, getUser, activation, forgetPassword, resetPassword } = UserController;

router.get('/users/validate-Token', extractJWT, getUser);
router.post('/users/register', validateSign, register);
router.post('/users/login', validateLogin, login);
router.post('/users/activation', extractJWT, activation);
router.post('/users/forgetPassword', forgetPasswordValidator, forgetPassword);
router.post('/users/resetPassword', resetPasswordValidator, extractJWT, resetPassword);

export = router;
