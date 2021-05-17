import { Request, Response } from 'express';
import { CreateToken, ResponseProcessor } from '../utils';
import User from '../models/user';
import cognito from '../services/cognito.service';

// credentials
// user daje email i pass (type=creds)
// user podczas save ma hashowane pass

// provider
// provider daje email i id (type=google/facebook)
// outer id -> w bazie
//

export const awsController = async (req: Request, res: Response) => {
  const { code } = req.body;
  try {
    const access_token = await cognito.postToken(code);
    if (!access_token) throw Error('token does not exist');

    const { email, sub } = await cognito.getUserInfo(access_token);
    if (!email && sub) throw Error('email does not exist');

    const user = await User.findOne({ email });
    if (user) {
      const token = CreateToken({ _id: user._id }, 31556926);
      return ResponseProcessor(res).sendResult({ token });
    }

    const newUser = new User({ email });

    const result = await newUser.save();
    if (!result) ResponseProcessor(res).sendError('Error AWS on user Save');
    const token = CreateToken({ _id: result._id }, 31556926);

    return ResponseProcessor(res).sendResult({ token });
  } catch (err) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};
