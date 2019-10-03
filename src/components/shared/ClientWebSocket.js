import socketio from 'socket.io-client';

const ClientWebSocket = socketio.connect('http://localhost:3000');

export default ClientWebSocket;