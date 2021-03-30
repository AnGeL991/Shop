import { Document, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  newsletter?: boolean;
  regulations?: Boolean;
  role: string;
  _id?: string;
}

export interface IUserModel extends Model<IUser> {
  addUser(User: IUser): Promise<void>;
  deleteUser(UserId: string): Promise<void>;
  updateUser(UserId: string, props: IUser): Promise<void>;
  updateHashedPassword(password: string): Promise<void>;
  comparePassword(candidatePassword: string): Promise<void>;
}
