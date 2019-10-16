const express = require('express');
const Router = express.Router();
const Models = require('../models');

const chatroom = Models.chatroom;

Router.use((req, res, next) => {
  next();
});

Router.get('/list', (req, res) => {
  chatroom.findAll().then(rooms => {
    res.send(rooms);
  });
});

Router.put('/count', (req, res) => {
  const id = req.body.id;
  const type = req.body.type;
  chatroom.findByPk(id).then(room => {
    const count = ( type == '+' ) ? room.count + 1 : room.count - 1;
    chatroom.update({ count }, { where: { room_id: room.room_id } }).then(() => {
      chatroom.findAll().then(rooms => res.send(rooms));
    });
  });

});

module.exports = Router;