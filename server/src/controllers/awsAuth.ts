import { Request, Response } from 'express';
import { CreateToken, errorHandler, ResponseProcessor } from '../utils';
import { config } from '../config';
import User from '../models/user';
import cognito from '../services/cognito.service';

export const awsController = async (req: Request, res: Response) => {
  const { code } = req.query;
  console.log(code);
  try {
    const accessToken = await cognito.postToken(code);
    if (!accessToken) throw Error('token does not exist');
    const email = await cognito.getUserInfo(accessToken);
    if (!email) throw Error('email does not exist');

    const user = await User.findOne({ email });
    if (user) {
      const token = CreateToken({ _id: user._id }, 31556926);
      res.cookie('UserToken', token);
      return res.redirect(`/:${token}`);
    }

    const password = email + config.server.token.secret;
    const newUser = new User({ email, password, regulations: true });
    const result = await newUser.save();
    if (!result) ResponseProcessor(res, 500, { error: 'Error AWS on user Save' });
    const token = CreateToken({ _id: result._id }, 31556926);

    res.cookie('UserToken', token);
    return res.redirect(`/${token}`);
  } catch (err) {
    return ResponseProcessor(res, 500, { error: err.message });
  }
};
export const getUser = async (req: Request, res: Response) => {
  errorHandler(res, User.findOne({ _id: res.locals.user }), 200, 500);
};