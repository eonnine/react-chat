const makeChatRoom = (sequelize, Sequelize) => {
  return sequelize.define('chatroom', {
    room_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pwd: {
      type: Sequelize.STRING,
    },
    count: {
      type: Sequelize.INTEGER,
    },
    count_limit: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    timestamps: true,
  });
}

module.exports = makeChatRoom;