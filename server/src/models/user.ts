import { model, Schema } from 'mongoose';
import { IUser, IUserModel } from '../interfaces/user';
import bcryptjs from 'bcryptjs';
import { response } from 'express';

const Salt = 10;
// https://tomanagle.medium.com/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
// jak otypować static

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, trim: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    newsletter: { type: Boolean },
    regulations: { type: Boolean, required: true },
    role: { type: String, default: 'Client' }
  },
  {
    timestamps: true
  }
);

UserSchema.statics.addUser = async function (userToAdd: IUser) {
  const user = new this(userToAdd);
  return await user.save();
};

UserSchema.pre('save', async function (this: IUser, next) {
  let user = this;
  try {
    const salt = await bcryptjs.genSalt(Salt);
    const hashedPassword = await bcryptjs.hash(user.password, salt);
    user.password = hashedPassword;
  } catch (err) {
    response.status(500).json({
      message: err.message,
      err
    });
  }
});

UserSchema.statics.comparePassword = async function (candidatePassword: string) {
  return await bcryptjs.compare(candidatePassword, this.password);
};

const UserModel = model<IUser, IUserModel>('User', UserSchema);

export default UserModel;
