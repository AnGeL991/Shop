import { model, Schema } from 'mongoose';
import { IUserDocument, IUserModel } from '../interfaces/user';
import bcryptjs from 'bcryptjs';
import { response } from 'express';

const Salt = 10;
// https://tomanagle.medium.com/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
// jak otypować static

const UserSchema = new Schema<IUserDocument, IUserModel>(
  {
    email: { type: String, required: true, trim: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String },
    newsletter: { type: Boolean },
    regulations: { type: Boolean, required: true },
    role: { type: String, default: 'Client' }
  },
  {
    timestamps: true
  }
);

UserSchema.statics.addUser = async function (userToAdd: IUserDocument) {
  const user = new this(userToAdd);
  return await user.save();
};

UserSchema.pre('save', async function (this: IUserDocument) {
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

UserSchema.methods.comparePassword = function (candidatePassword: string) {
  return bcryptjs.compare(candidatePassword, this.password);
};

UserSchema.statics.updateHashedPassword = async function (id: string, password: string) {
  const salt = await bcryptjs.genSalt(10);
  const newPassword = await bcryptjs.hash(password, salt);
  await this.findByIdAndUpdate(id, { password: newPassword });
};

const UserModel = model<IUserDocument, IUserModel>('User', UserSchema);

export default UserModel;
