const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);
app.use(cors());

io.on('connection', (socket) => {
  // Add user
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    // Error handling
    if (error) return callback(error);
   
    // Join a room
    socket.join(user.room);

    // Welcome message
    socket.emit('message', { 
      user: 'admin', 
      text: `${user.name}, welcome to the room ${user.room}`
    });

    // Message to others in the room
    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name} has joined!`
    });


    callback();
  });

  // User send a message
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  // User disconnect
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) io.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name} has left!`
    });
  });
});


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
