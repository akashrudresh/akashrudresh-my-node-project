// Import the required libraries
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an Express app
const app = express();

// Create an HTTP server using the app
const server = http.createServer(app);

// Attach Socket.io to the server
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Listen for connection events
io.on('connection', (socket) => {
  console.log('New user connected');

  // Handle 'offer' message (sent by the user who is calling)
  socket.on('offer', (offer) => {
    socket.broadcast.emit('offer', offer);
  });

  // Handle 'answer' message (sent by the user who answers the call)
  socket.on('answer', (answer) => {
    socket.broadcast.emit('answer', answer);
  });

  // Handle ICE candidates
  socket.on('ice-candidate', (candidate) => {
    socket.broadcast.emit('ice-candidate', candidate);
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
