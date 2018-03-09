/* eslint-disable func-names */
import mongoose, { Error } from 'mongoose';
import crypto from 'crypto';
import { S3DocumentSchema } from './s3Document';

export const UserRoleType = Object.freeze({
  SUPER_USER: 'SUPER_USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  USER: 'USER',
  ARTIST: 'ARTIST',
});

export const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: false },
  mobile: { type: Number, required: true },
  hashedPassword: { type: String, select: false },
  otp:  { type: Number, select: false },
  salt:  { type: String, select: false },
  isArtist: Boolean,
  isUserVerified: Boolean,
  hasUserVerifiedAsAnArtist: Boolean,
  profilePicture: S3DocumentSchema,
  coverPicture: S3DocumentSchema,
  role: { type: String, default: UserRoleType.USER },
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
    this.hashedPassword = this.encrypt(password);
  })
  .get(function () {
    return this.hashedPassword;
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
