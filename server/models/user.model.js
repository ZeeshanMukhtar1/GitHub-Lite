import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      default: '',
    },
    profileUrl: {
      type: String,
      default: '',
    },
    avatarUrl: {
      type: String,
      default: '',
    },
    likedProfiles: {
      type: [String],
      default: [],
    },
    likedBy: [
      {
        username: {
          type: String,
          required: true,
        },
        avatarUrl: {
          // Corrected field name
          type: String,
        },
        likedDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
