import { Document, Model } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  newsletter?: boolean;
  regulations?: Boolean;
  role: string;
}
export interface IUserDocument extends IUser, Document {
  comparePassword(candidatePassword: string): boolean;
}
export interface IUserModel extends Model<IUserDocument> {
  addUser(User: IUser): Promise<void>;
  deleteUser(UserId: string): Promise<void>;
  updateUser(UserId: string, props: IUser): Promise<void>;
  updateHashedPassword(id: string, password: string): Promise<void>;
}
