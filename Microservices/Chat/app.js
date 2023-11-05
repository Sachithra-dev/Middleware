const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

io.on('connection', (socket) => {
  console.log('User connected');

  // Handle chat messages
  socket.on('chat message', async (data) => {
    const { sender, receiver, message } = data;

    // Save the message to the database
    const newMessage = new Message({ sender, receiver, message });
    await newMessage.save();

    // Broadcast the message to all connected clients
    io.emit('chat message', newMessage);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});

// Express API to fetch chat history from MongoDB
app.get('/messages/:sender/:receiver', async (req, res) => {
  const { sender, receiver } = req.params;
  const messages = await Message.find({
    $or: [
      { sender: sender, receiver: receiver },
      { sender: receiver, receiver: sender },
    ],
  }).sort({ timestamp: 1 });
  res.json(messages);
});
