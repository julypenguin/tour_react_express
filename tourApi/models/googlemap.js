
module.exports = (sequelize, DataTypes) => {
  const GoogleMap = sequelize.define('GoogleMap', {
    lat: DataTypes.INTEGER,
    lng: DataTypes.INTEGER,
    mapName: DataTypes.STRING,
    PostId: DataTypes.INTEGER,
  }, {});
  GoogleMap.associate = function (models) {
    GoogleMap.belongsTo(models.Post);
  };
  return GoogleMap;
};
