import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    profile_img: String, // Added profile_img field
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    course_id: String, // Added course_id field
    batch_id: String, // Added batch_id field
    type: String, // Added type field
    active_status: {
      type: Boolean,
      default: true,
    },
    email_verified_at: Date, // Added email_verified_at field
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    remember_token: String, // Added remember_token field
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const User = mongoose.model('User', UserSchema);

export default User;
