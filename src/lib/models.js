import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  interests: [String],
  goals: [String],
  communicationStyle: String,
  profilePicture: String
}, { timestamps: true });

// Community Schema
const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

// Forum Post Schema
const forumPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community'
  },
  comments: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

// Mental Wellness Resource Schema
const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['article', 'video', 'podcast', 'course']
  },
  content: String,
  url: String,
  author: String,
  tags: [String]
}, { timestamps: true });

// Event Schema
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  date: {
    type: Date,
    required: true
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  type: {
    type: String,
    enum: ['workshop', 'webinar', 'support_group']
  }
}, { timestamps: true });

// Support Session Schema
const supportSessionSchema = new mongoose.Schema({
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    required: true
  },
  notes: String,
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled']
  }
}, { timestamps: true });

// Create models if they don't already exist
export const UserModel = mongoose.models.UserModel || mongoose.model('UserModel', userSchema);
export const Community = mongoose.models.Community || mongoose.model('Community', communitySchema);
export const ForumPost = mongoose.models.ForumPost || mongoose.model('ForumPost', forumPostSchema);
export const Resource = mongoose.models.Resource || mongoose.model('Resource', resourceSchema);
export const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);
export const SupportSession = mongoose.models.SupportSession || mongoose.model('SupportSession', supportSessionSchema);