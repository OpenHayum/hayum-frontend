
import mongoose from 'mongoose';
import { S3DocumentSchema } from './s3Document';

export const ItemStatus = Object.freeze({
  PENDING: 'PENDING',
  REVIEWING: 'REVIEWING',
  APPROVED: 'APPROVED',
  DECLINED: 'DECLINED',
  DELETED: 'DELETED',
});

export const ItemCategory = Object.freeze({
  SONG: 'SONG',
  SUMANG_LILA: 'SUMANG_LILA',
  RADIO_LILA: 'RADIO_LILA',
});

export const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  isOldSong: { type: Boolean, default: false },
  album: String,
  category: { type: String, default: ItemCategory.SONG },
  thumbnail: { type: S3DocumentSchema, required: true },
  status: { type: String, default: ItemStatus.PENDING },
  s3Document: S3DocumentSchema,
  meta: {
    size: Number,
    downloads: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    plays: { type: Number, default: 0 },
    numberOfFavorites: { type: Number, default: 0 }, 
  },
  uploadedBy: String,
  moderatedBy: String,
  createdDate: { type: Date, default: Date.now },
  updatedDate: Date,
  deletedDate: Date,
});

ItemSchema.statics = {
  /**
   * get all items by status
   * @param {string} status
   * @returns {Promise}
   */
  getItemsByStatus(status) {
    return this.where('status', status).lean().exec();
  },

  /**
   * get an item by id
   * @param {string} id
   * @param isLean
   * @returns {Promise}
   */
  getItemById(id, isLean = true) {
    const item = this.findById(id);
    return item.lean(isLean).exec();
  },

  /**
   * add Favorite to list
   * @param item
   * @param user
   */
  addFavorite(item, user) {
    const data = {
      userId: user.id,
      username: user.username,
    };

    item.meta.favorites.push(data);
    item.save();
  },
};

export default mongoose.model('Item', ItemSchema);
