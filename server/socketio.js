const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3001', 
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  
  socket.on('draw' , (data)=>{
    socket.broadcast.emit('draw' , data);
  });
  socket.on('clear', () => {
    io.emit('clear'); 
  });

});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
