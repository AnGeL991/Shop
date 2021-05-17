import { Request, Response } from 'express';
import { Validate, CreateToken, errorHandler, ResponseProcessor } from '../utils';
import User from '../models/user';
import { EmailSender } from '../services/emailSender.services';

/* Register user */
export const register = async (req: Request, res: Response) => {
  const { email } = req.body;
  Validate(req, res);
  try {
    const user = await User.findOne({ email });
    if (user) return ResponseProcessor(res).sendError({ message: 'Email already exists' });
    const token = CreateToken(req.body, '15m');
    return await EmailSender.sendEmailWithVerifyAccount(res, email, token);
  } catch (err) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};

/* user activation*/
export const activation = (req: Request, res: Response) => {
  return errorHandler(res, User.addUser(res.locals.user));
};

/* login user */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  Validate(req, res);
  try {
    const user = await User.findOne({ email });
    if (!user) return ResponseProcessor(res).sendError({ message: 'Email lub hasło są nie prawidłowe' });
    const validatePassword = await user.comparePassword(password);
    if (!validatePassword) return ResponseProcessor(res).sendError({ message: 'Email lub hasło są nie prawidłowe' });
    const token = CreateToken({ _id: user._id }, 31556926);
    return res.send({ token });
  } catch (err) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};

/* get user by id */
export const getUser = (req: Request, res: Response) => {
  errorHandler(res, User.findById(res.locals.user));
};

/* forgetPassword */
export const forgetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  Validate(req, res);
  try {
    const user = await User.findOne({ email });
    if (!user) return ResponseProcessor(res).sendError({ message: 'Email jest nie prawidłowy' });
    const token = CreateToken({ _id: user._id }, 31556926);
    return await EmailSender.sendEmailWithResetPasswordLink(res, email, token);
  } catch (err) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};

/* resetPassword */
export const resetPassword = (req: Request, res: Response) => {
  const { newPassword } = req.body;
  Validate(req, res);
  return errorHandler(res, User.updateHashedPassword(res.locals.user, newPassword));
};
