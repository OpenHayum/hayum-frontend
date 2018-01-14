import mongoose from 'mongoose';

export const FavoriteSchema = new mongoose.Schema({
  userId: String,
  itemId: String,
  name: String,
  artist: String,
});

export default mongoose.model('Favorite', FavoriteSchema);
