const express = require('express');
const Router = express.Router();
const Models = require('../models');

const chatroom = Models.chatroom;

const getRooms = (fn) => {
  chatroom.findAll({ order: [ ['room_id', 'DESC'] ] }).then(result => fn(result));
}

Router.use((req, res, next) => {
  next();
});

Router.get('/room/list', (req, res) => {
  getRooms(rooms => res.send(rooms));
});

Router.post('/room', (req, res) => {
  const { title, password } = req.body;
  chatroom.count({ where: { title } }).then(count => {
    if( count > 0 ){
      res.send({ code: -1 });
      return;
    }
    
    chatroom.create({ title, pwd: password, count:0, count_limit: 0 }).then(result => {
      console.log(result);
    });
  
    getRooms(rooms => res.send(rooms));
  });
});

Router.put('/room/count', (req, res) => {
  const id = req.body.id;
  const type = req.body.type;
  chatroom.findByPk(id).then(room => {
    const count = ( type == '+' ) ? room.count + 1 : room.count - 1;
    chatroom.update({ count }, { where: { room_id: room.room_id } }).then(() => {
      getRooms(rooms => res.send(rooms));
    });
  });

});

module.exports = Router;