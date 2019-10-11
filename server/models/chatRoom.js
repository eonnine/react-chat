const makeChatRoom = (sequelize, Sequelize) => {
  return sequelize.define('chatroom', {
    room_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
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