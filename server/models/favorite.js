import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  itemId: String,
  itemName: String,
  artist: String,
});

export default mongoose.model('Favorite', FavoriteSchema);
