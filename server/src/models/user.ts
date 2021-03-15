import { model, Schema } from 'mongoose';
import { IUser, IUserModel } from '../interfaces/user';
import bcryptjs from 'bcryptjs';
import { response } from 'express';

const Salt = 10;

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    newsletter: { type: Boolean },
    regulations: { type: Boolean, required: true },
    Role: { type: String, default: 'Client' }
  },
  {
    timestamps: true
  }
);
UserSchema.statics.addUser = async function (userToAdd: IUser) {
  const user = new this(userToAdd);
  return await user.save();
};
UserSchema.statics.deleteUser = async function (userId: string) {
  const user = await this.findByIdAndRemove(userId);
  if (!user) {
    throw Error('No user with given Id!');
  }
  return;
};
UserSchema.statics.updateUser = async function (userId: string, props) {
  const user = await this.findByIdAndUpdate(userId, { ...props });
  if (!user) {
    throw Error('No user with given Id!');
  }
  return;
};

UserSchema.pre('save', function (this: IUser, next) {
  let user = this;
  if (!user.isModified('password')) next();
  try {
    bcryptjs.genSalt(Salt, (hashError, hash) => {
      if (hashError) return next(hashError);
      bcryptjs.hash(user.password, hash, function (hashError, hash) {
        if (hashError) return next(hashError);
        user.password = hash;
        next();
      });
    });
  } catch (err) {
    response.status(500).json({
      message: err.message,
      err
    });
  }
});

// UserSchema.methods.comparePassword = async function (this: IUser, candidatePassword: string) {
//   return await bcryptjs.compare(candidatePassword, this.password);
// };

export const UserModel = model<IUser, IUserModel>('User', UserSchema);

export default UserModel;
