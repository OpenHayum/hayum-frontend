import mongoose from 'mongoose';

export const S3DocumentSchema = new mongoose.Schema({
  key: String,
  originalFilename: String,
  isDeleted: { type: Boolean, default: false },
  createdDate: { type: Date, default: Date.now },
  deletedDate: Date,
});

export default mongoose.model('S3Document', S3DocumentSchema);
