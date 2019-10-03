const socketio = require('socket.io');

const WebSocket = (server) => {

  const io = socketio.listen(server);

  io.on('connection', (socket) => {

    socket.on('message', (param) => {
      io.emit(`message${param.roomId}`, param);
    });

  });

}

module.exports = WebSocket;
