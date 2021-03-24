import { check } from 'express-validator';

export const validateSign = [check('email').isEmail().withMessage('Must be a valid email adress')];

export const validateLogin = [
  check('email').isEmail().withMessage('Must be a valid email adress'),
  check('password', 'password is required').notEmpty(),
  check('password').isLength({ min: 6 }).withMessage('Password must contain at least 6 characters')
];

export const forgetPasswordValidator = [check('email').not().isEmpty().isEmail().withMessage('Must be a valid email address')];

export const resetPasswordValidator = [check('newPassword').not().isEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')];
