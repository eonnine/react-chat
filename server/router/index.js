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
  console.log(req.params);
  chatroom.findByPk().then(room => {
    
  });
  res.send('1');
});

module.exports = Router;