import express from 'express';
import controller from '../controllers/user';
import extractJWT from '../middlewares/extractJWT';

const router = express.Router();

router.get('/validate',extractJWT, controller.ValidateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/user', controller.getUser);

export = router;
