## RelayX
RelayX is a side project I built to learn how real time applications work and get hands on experience with **Socket.IO** and **WebRTC** by building a messaging and video calling app from scratch Along the way I learned how to handle real time communication user Auth media sharing 

## Features
- Sign in securely with **Clerk**
- Chat with friends in real time
- See who's currently online
- Share images and videos in conversations
- Start one-to-one video calls powered by **WebRTC**
- All data is stored using **MongoDB**

## Environment Variables
### backend

```bash
PORT=<your_port>

NODE_ENV=<development_or_production>

MONGO_URI=<your_mongodb_connection_string>

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
CLERK_WEBHOOK_SIGNING_SECRET=<your_clerk_webhook_signing_secret>

IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>

```

##  Tech Stack

### Frontend

- React
- Tailwind CSS
- Hero UI
- Zustand
- Socket.io Client

### Backend

- Node.js
- Express.js
- MongoDB
- Socket.io
- Clerk
- ImageKit
