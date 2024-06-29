
import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
  interests: { type: [String], required: true },
  goals: { type: [String], required: true },
  commStyle: { type: String },
});

module.exports = mongoose.model('Profile', ProfileSchema);
