
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('GoogleMaps', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    lat: {
      type: Sequelize.DOUBLE,
    },
    lng: {
      type: Sequelize.DOUBLE,
    },
    mapName: {
      type: Sequelize.STRING,
    },
    PostId: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('GoogleMaps'),
};
