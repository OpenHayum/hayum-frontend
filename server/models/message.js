import mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  senderId: String,
  message: String,
  date: Date,
});

export default mongoose.model('Message', MessageSchema);
