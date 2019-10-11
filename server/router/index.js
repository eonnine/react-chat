const express = require('express');
const Router = express.Router();
const Models = require('../models');

const chatroom = Models.chatroom;

Router.use((req, res, next) => {
  next();
});

Router.get('/chatRooms', (req, res) => {
  chatroom.findAll().then(rooms => {
    res.send(rooms);
  });
});

module.exports = Router;