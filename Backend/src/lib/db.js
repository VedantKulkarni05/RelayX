import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongodbURI = process.env.MONGODB_URI
    if (!mongodbURI) {
      throw new Error('MONGODB_URI is not defined in the env')
    }
    const conn = await mongoose.connect(mongodbURI)
    console.log('mongoDB connected succesfully', conn.connection.host)
    return true
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message)
    return false
  }
}

export default connectDB
