import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { config } from '../config';
import { Validate, CreateToken, errorHandler } from '../utils';
import User from '../models/user';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(config.sqMail.MAIL_KEY);

/* Register user */
export const register = async (req: Request, res: Response) => {
  const { email } = req.body;

  Validate(req, res);

  try {
    const user = await User.findOne({ email });

    if (user) return res.status(400).send({ message: 'Email already exists' });

    const token = CreateToken(req.body, '15m');

    const emailData = {
      from: config.sqMail.EMAIL_FROM,
      to: email,
      subject: 'Account activation link',
      html: `
              <h1>Please use the following to activate your account</h1>
              <p> http://localhost:3000/users/activate/${token}</p>
              <hr />
              <p>This email may containe sensetive information</p>
              <p> http://localhost:3000</p>
          `
    };

    return sgMail
      .send(emailData)
      .then((sent) => {
        return res.json({
          message: `Email has been sent to ${email}`
        });
      })
      .catch((err) => {
        return res.status(500).json({
          success: false,
          error: err.message
        });
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
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

    if (!user) return res.status(500).send({ message: 'Email lub hasło są nie prawidłowe' });

    const validatePassword = await bcryptjs.compare(password, user.password);
    // const validatePassword = User.comparePassword(password);

    console.log(validatePassword);
    if (!validatePassword) return res.status(500).send({ message: 'Email lub hasło są nie prawidłowe' });

    const token = CreateToken({ _id: user._id }, 31556926);

    return res.send({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/* get user by id */
export const getUser = (req: Request, res: Response) => {
  errorHandler(res, User.find({ _id: res.locals.user }), 200, 500);
};

/* forgetPassword */
export const forgetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  Validate(req, res);

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(500).send({ message: 'Email jest nie prawidłowy' });

    const token = CreateToken({ _id: user._id }, 31556926);

    const emailData = {
      from: config.sqMail.EMAIL_FROM,
      to: email,
      subject: `Password Reset link`,
      html: `
                <h1>Please use the following link to reset your password</h1>
                <p>${config.server.hostname}:${config.server.port}/users/resetPassword/${token}</p>
                <hr />
                <p>This email may contain sensetive information</p>
                <p>${config.server.hostname}:${config.server.port}</p>
            `
    };

    return sgMail.send(emailData).then((sent) => {
      return res.json({
        message: `Email has been sent to ${email}. Follow the instruction to activate your account`
      });
    });
  } catch (error) {
    return res.json({
      error: error.message
    });
  }
};

/* resetPassword */
export const resetPassword = async (req: Request, res: Response) => {
  const { newPassword } = req.body;
  console.log(newPassword);
  Validate(req, res);

  const salt = await bcryptjs.genSalt(10);

  const hashPassword = await bcryptjs.hash(newPassword, salt);

  return errorHandler(res, User.findByIdAndUpdate(res.locals.user, { password: hashPassword }), 200, 500);
};
