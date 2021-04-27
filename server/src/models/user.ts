import { model, Schema } from 'mongoose';
import { IUser, IUserDocument, IUserModel } from '../interfaces/user';
import bcryptjs from 'bcryptjs';
import { response } from 'express';

const UserSchema = new Schema<IUserDocument, IUserModel>(
  {
    email: { type: String, required: true, trim: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String },
    contact: { type: String },
    adress: { type: String },
    city: { type: String },
    state: { type: String },
    code: { type: String },
    country: { type: String },
    accountStatus: { type: Number, default: 0 },
    ordersId: { type: Array, default: [] },
    wishId: { type: Array, default: [] },
    newsletter: { type: Boolean },
    regulations: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
);

UserSchema.statics.addUser = async function (userToAdd: IUserDocument | { email: string; regulations: boolean }) {
  const user = new this(userToAdd);
  return await user.save();
};

UserSchema.pre('save', async function (this: IUserDocument) {
  let user = this;
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(user.password, salt);
    user.password = hashedPassword;
  } catch (err) {
    response.status(500).json({
      message: err.message,
      err
    });
  }
});

UserSchema.methods.comparePassword = function (candidatePassword: string) {
  return bcryptjs.compare(candidatePassword, this.password);
};

UserSchema.statics.updateHashedPassword = async function (id: string, password: string) {
  const salt = await bcryptjs.genSalt(10);
  const newPassword = await bcryptjs.hash(password, salt);
  await this.findByIdAndUpdate(id, { password: newPassword });
};
UserSchema.statics.updateOrder = async function (id: string, ordersId: string) {
  return await this.findOneAndUpdate({ _id: id }, { $addToSet: { ordersId } });
};
UserSchema.statics.updateWish = async function (id: string, wishId: string) {
  return await this.findOneAndUpdate({ _id: id }, { $addToSet: { wishId } });
};
UserSchema.statics.updateStatus = async function (id: string, accountStatus: string | number) {
  return await this.findOneAndUpdate({ _id: id }, { accountStatus });
};
UserSchema.statics.updateAccount = async function (_id: string, updateDate: IUser) {
  return await this.findOneAndUpdate({ _id }, { ...updateDate });
};

const UserModel = model<IUserDocument, IUserModel>('User', UserSchema);

export default UserModel;
