const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const io = socketIO(httpServer, {
  cors: {
    orgin: 'http://localhost:3000',
  },
});

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

const users = [];

io.on('connection', (socket) => {
  console.log(`Unsigned connection：${socket.id}`);
  io.emit('update users', users);

  socket.on('enter chatroom', (username) => {
    socket.username = username;
    users.unshift(username);
    io.emit('welcome', `${username}进入了聊天室。`);
    io.emit('update users', users);
  });

  socket.on('message send', (msg) => {
    const message = {
      content: msg,
      username: socket.username,
    };
    socket.broadcast.emit('message receive', message);
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      users.splice(
        users.findIndex((user) => user === socket.username),
        1
      );
    }
    io.emit('update users', users);
  });
});

const PORT = process.env.PORT || 2333;

httpServer.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
