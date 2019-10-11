const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('chat', 'chat', 'chat', {
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
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;