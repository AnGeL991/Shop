import { Request, Response } from 'express';
import Cognito from '../services/cognito.service';

export const signUp = async (req: Request, res: Response) => {
  const { username, password, email, birthdate, name, family_name } = req.body;

  let userAttr = [];
  userAttr.push({ Name: 'email', Value: email });
  userAttr.push({ Name: 'birthdate', Value: birthdate });
  userAttr.push({ Name: 'name', Value: name });
  userAttr.push({ Name: 'family_name', Value: family_name });
  Cognito.signUpUser(res, username, password, userAttr);
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  Cognito.signInUser(res, email, password);
};

export const forgotPassword = (req: Request, res: Response) => {
  const { username } = req.body;
  Cognito.forgotPassword(res, username);
};
export const confirmPassword = (req: Request, res: Response) => {
  const { username, password, code } = req.body;
  Cognito.confirmNewPassword(res, username, password, code);
};
export const setUp = (req: Request, res: Response) => {
  res.send({ result: res.locals.user });
};
