import { Request, Response } from 'express';
import { config } from '../config';
import { Validate, CreateToken, errorHandler, ResponseProcessor } from '../utils';
import User from '../models/user';
import sgMail from '@sendgrid/mail';
import { emailData } from '../config';

sgMail.setApiKey(config.sqMail.MAIL_KEY);

/* Register user */
export const register = async (req: Request, res: Response) => {
  const { email } = req.body;
  Validate(req, res);
  try {
    const user = await User.findOne({ email });
    if (user) return ResponseProcessor(res, 400, { message: 'Email already exists' });
    const token = CreateToken(req.body, '15m');
    const emailTemplate = emailData(email, 'd-711a3dbcc82143d09a6739a4613668e1', { link: `http://localhost:3000/users/activate/${token}` });
    return sgMail
      .send(emailTemplate)
      .then((sent) => {
        return ResponseProcessor(res, 200, { message: `Email has been sent to ${email}` });
      })
      .catch((err) => {
        return ResponseProcessor(res, 500, { error: err.message });
      });
  } catch (err) {
    return ResponseProcessor(res, 500, { error: err.message });
  }
};

/* user activation*/
export const activation = (req: Request, res: Response) => {
  return errorHandler(res, User.addUser(res.locals.user), 200, 500);
};

/* login user */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  Validate(req, res);
  try {
    const user = await User.findOne({ email });
    if (!user) return ResponseProcessor(res, 500, { message: 'Email lub hasło są nie prawidłowe' });
    const validatePassword = await user.comparePassword(password);
    if (!validatePassword) return ResponseProcessor(res, 500, { message: 'Email lub hasło są nie prawidłowe' });
    const token = CreateToken({ _id: user._id }, 31556926);
    return res.send({ token });
  } catch (err) {
    return ResponseProcessor(res, 500, { error: err.message });
  }
};

/* get user by id */
export const getUser = (req: Request, res: Response) => {
  errorHandler(res, User.findById(res.locals.user), 200, 500);
};

/* forgetPassword */
export const forgetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  Validate(req, res);
  try {
    const user = await User.findOne({ email });
    if (!user) return ResponseProcessor(res, 500, { message: 'Email jest nie prawidłowy' });
    const token = CreateToken({ _id: user._id }, 31556926);
    const emailTemplate = emailData(email, 'd-b7667e8ce86748768bf618a599789f46', { link: `http://localhost:3000/users/reset/${token}` });
    return sgMail.send(emailTemplate).then((sent) => {
      return ResponseProcessor(res, 200, { message: `Email has been sent to ${email}. Follow the instruction to activate your account` });
    });
  } catch (err) {
    return ResponseProcessor(res, 500, { error: err.message });
  }
};

/* resetPassword */
export const resetPassword = (req: Request, res: Response) => {
  const { newPassword } = req.body;
  Validate(req, res);
  return errorHandler(res, User.updateHashedPassword(res.locals.user, newPassword), 200, 500);
};

export const updateOrder = (req: Request, res: Response) => {
  const { orderId } = req.body;
  errorHandler(res, User.updateOrder(res.locals.user, orderId), 200, 500);
};
export const updateWish = (req: Request, res: Response) => {
  const { id, wishId } = req.body;
  errorHandler(res, User.updateWish(id, wishId), 200, 500);
};
export const updateAccount = (req: Request, res: Response) => {
  const { status } = req.body;
  errorHandler(res, User.updateStatus(res.locals.user, status), 200, 500);
};

// export const facebookController = async (req: Request, res: Response) => {
//   const { userID, accessToken } = req.body;

//   const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

//   try {
//     const response = await fetch(url, { method: 'GET' });
//     if (!response) return ResponseProcessor(res, 401, { error: 'Facebook login failed. Try later' });
//     const { email, name } = await response.json();
//     const user = await User.findOne({ email });
//     if (user) {
//       const token = CreateToken({ _id: user._id }, 31556926);
//       return ResponseProcessor(res, 200, { token, user: { ...user } });
//     }
//     let password = email + config.server.token.secret;
//     const newUser = new User({ firstName: name, email, password, regulations: true });
//     const result = await newUser.save();
//     if (!result) return ResponseProcessor(res, 500, { error: 'Error Facebook login on user Save' });
//     const token = CreateToken({ _id: result._id }, 31556926);
//     return ResponseProcessor(res, 200, { token, result });
//   } catch (err) {
//     return ResponseProcessor(res, 401, { error: err.message });
//   }
// };
