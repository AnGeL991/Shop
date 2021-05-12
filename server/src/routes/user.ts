import { Router } from 'express';
import { AuthController, UserController } from '../controllers';
import { extractJWT } from '../middlewares';
import { validateLogin, validateSign, forgetPasswordValidator, resetPasswordValidator } from '../validator/index';

const router = Router();
const { register, login, getUser, activation, forgetPassword, resetPassword } = AuthController;
const { updateAccount, updateOrder, updateStatus, updateWish, removeWish } = UserController;

router.get('/users/validate-Token', extractJWT, getUser);
router.post('/users/register', validateSign, register);
router.post('/users/login', validateLogin, login);
router.post('/users/activation', extractJWT, activation);
router.post('/users/forgetPassword', forgetPasswordValidator, forgetPassword);
router.post('/users/resetPassword', resetPasswordValidator, extractJWT, resetPassword);
router.put('/users/status', extractJWT, updateStatus);
router.put('/users/order', extractJWT, updateOrder);
router.put('/users/wish', extractJWT, updateWish);
router.put('/users/wish/remove', extractJWT, removeWish);
router.put('/users/account', extractJWT, updateAccount);

export = router;
