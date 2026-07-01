import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: ''
  }
},{timestamps: true})

const user = mongoose.model('user', userSchema)

export default user
 