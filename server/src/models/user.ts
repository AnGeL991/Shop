import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String, required: true },
    newsletter: { type: Boolean },
    regulations: { type: Boolean }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IUser>('User', UserSchema);
