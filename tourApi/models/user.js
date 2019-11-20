
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Post);
  };
  return User;
};
