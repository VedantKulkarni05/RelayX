import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'user',
      required: true
    },
    reaciverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'user',
      required: true
    },
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: null
    },
    video: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
)

const Message = mongoose.model('message', messageSchema)

export default Message
