const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('chat', 'chat_user', 'chat', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

fs.readdirSync(__dirname)
.filter(file => {
  return ( file.indexOf('.') !== 0 ) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.chatroom.create({
  room_id: 1,
  title: '샘플 하나',
  pwd: 1,
  count: 0,
  count_limit: 0
});

db.chatroom.create({
  room_id: 2,
  title: '샘플 둘',
  count: 0,
  count_limit: 0
});

db.chatroom.create({
  room_id: 3,
  title: '샘플 셋',
  pwd: '',
  count: 0,
  count_limit: 0
});

module.exports = db;