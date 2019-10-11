const express = require('express');
const websocket = require('./server-websocket');
const app = express();
const server = require('http').createServer(app);

const Router = require('./router');
const Models = require('./models');

app.use("/public", express.static("dist"));
app.use("/data", Router);
app.get('/', (_, res) => {
  res.redirect(302, "/public");
});

websocket(server);

Models.sequelize.sync().then(function() {
  server.listen(3000, () => console.log('server listening..'));
});
