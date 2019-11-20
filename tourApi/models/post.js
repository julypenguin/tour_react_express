
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.STRING,
  }, {});
  Post.associate = function (models) {
    Post.belongsTo(models.User);
    Post.belongsTo(models.Category);
    Post.hasMany(models.GoogleMap);
  };
  return Post;
};
