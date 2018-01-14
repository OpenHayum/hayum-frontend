/* eslint-disable func-names */
import mongoose from 'mongoose';
import crypto from 'crypto';
import { MessageSchema } from './message';

export const UserRoleType = {
  SUPER_USER: 'SUPER_USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  USER: 'USER',
};

export const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: String,
  otp: String,
  salt: String,
  role: String,
  isArtist: Boolean,
  isActivated: Boolean,
  awsS3Id: {
    profilePicture: String,
    coverPicture: String,
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
  }],
  messages: [MessageSchema],
  uploaded: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
  }],
  createdDate: { type: Date, default: Date.now },
  modifiedDate: Date,
  deletedDate: Date,
});

UserSchema.virtual('password')
  .set(function (password) {
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
