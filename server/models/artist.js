import mongoose from 'mongoose';

const ArtistSchema = new mongoose.Schema({
  name: String,
  userId: String,
});

export default mongoose.model('Artist', ArtistSchema);
