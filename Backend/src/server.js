import express from 'express'
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'

import user from './models/user.model.js'
import connectDB from './lib/db.js'


const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})

app.get('/health', async (req, res) => {
  try {
    res.status(200).json({ status: 'UP', timestamps: new Date() })
  } catch (err) {
    res
      .status(500)
      .json({ status: 'DOWN', error: err.message, timestamps: new Date() })
  }
})

connectDB().then(connected => {
  if (!connected) {
    console.warn(
      'MongoDB connection failed. Check your Atlas URI, DNS, and network access.'
    )
  }
})

export default app
