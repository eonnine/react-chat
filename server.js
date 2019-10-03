const express = require('express');
const websocket = require('./server-websocket');

const app = express();
const server = require('http').createServer(app);

app.use("/public", express.static("./dist"));
app.get('/', (_, res) => {
  res.redirect(302, "/public");
});

websocket(server);

server.listen(3000, () => console.log('server listening..'));