import { Document, Model } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  contact?: string;
  adress?: string;
  city?: string;
  state?: string;
  code?: string;
  country?: string;
  ordersId: Array<string>;
  accountStatus: number | string;
  wishId: Array<string>;
  newsletter?: boolean;
  regulations?: Boolean;
}
export interface IUserDocument extends IUser, Document {
  comparePassword(candidatePassword: string): boolean;
}
export interface IUserModel extends Model<IUserDocument> {
  addUser(User: IUser): Promise<void>;
  deleteUser(UserId: string): Promise<void>;
  updateUser(UserId: string, props: IUser): Promise<void>;
  updateHashedPassword(id: string, password: string): Promise<void>;
  updateOrder(id: string, orderId: string): Promise<void>;
  updateWish(id: string, wishId: string): Promise<void>;
  removeWish(id: string, wishId: string): Promise<void>;
  updateStatus(id: string, status: string | number): Promise<void>;
  updateAccount(id: string, updates: IUser): Promise<void>;
}
