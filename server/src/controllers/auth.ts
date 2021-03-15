import { Request, Response } from 'express';
import User from '../models/user';
import bcryptjs from 'bcryptjs';
import { config } from '../config';
import jwt from 'jsonwebtoken';
import { errorHandler } from './handlers';

/* Register user */
export const register = async (req: Request, res: Response) => {
  const { email } = req.body;

  //const { errors, isValid } = validateRegisterInput(req.body);
  const user = await User.findOne({ email });

  if (user) return res.status(400).send({ message: 'Email already exists' });
  return errorHandler(res, User.addUser(req.body), 200, 500);
};

/* login user */
export const login = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(500).send({ message: 'Email lub hasło są nie prawidłowe' });

    const validatePassword = await bcryptjs.compare(password, user.password);
    if (!validatePassword) return res.status(500).send({ message: 'Email lu hasło są nie prawidłowe' });

    const token = jwt.sign({ _id: user._id }, config.server.token.secret, { expiresIn: 31556926 });
    return res.send({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getUser = (req: Request, res: Response) => {
  errorHandler(res, User.find({ _id: res.locals.user }), 200, 500);
};
