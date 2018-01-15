/* eslint-disable func-names */
import mongoose, { Error } from 'mongoose';
import crypto from 'crypto';
import { MessageSchema } from './message';

export const UserRoleType = {
  SUPER_USER: 'SUPER_USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  USER: 'USER',
};
Object.freeze(UserRoleType);

export const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, select: false },
  otp:  { type: String, select: false },
  salt:  { type: String, select: false },
  isArtist: Boolean,
  awsS3Id: {
    profilePicture: String,
    coverPicture: String,
  },
  meta: {
    role: String,
    isActivated: Boolean,
    numberOfFavorites: Number,
    numberOfItemsUploaded: Number,
    favorites: [{
      itemId: String,
      itemName: String,
    }],
  },
  createdDate: { type: Date, default: Date.now },
  modifiedDate: Date,
  deletedDate: Date,
});

UserSchema.virtual('password')
  .set(function (password) {
    if (password === null || password === '') {
      throw new Error('Password is empty');
    }
    this.salt = this.makeSalt();
    this.hashed_password = this.encrypt(password);
  })
  .get(function () {
    return this.hashed_password;
  });

UserSchema.methods = {
  authenticate(plainText) {
    return (this.encrypt(plainText) === this.hashed_password);
  },

  makeSalt() {
    return Math.round(new Date().valueOf() * Math.random());
  },

  encrypt(password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
};

UserSchema.statics = {
  getUserById(id, isLean = true) {
    const user = this.findById(id);
    return user.lean(isLean).exec();
  },

  addFavorite(user, item) {
    const data = {
      itemId: item.id,
      itemname: item.name,
    };

    user.favorites.push(data);
    user.save();
  },
};

export default mongoose.model('User', UserSchema);
