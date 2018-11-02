module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    title: DataTypes.TEXT,
    date: DataTypes.TEXT,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    director: DataTypes.STRING,
    writers: DataTypes.STRING,
    stars: DataTypes.STRING,
    rate: DataTypes.STRING,
    movieCoverUrl: DataTypes.STRING,
    userId: DataTypes.STRING
  })

  Movies.associate = function (models) {
  }

  return Movies
}
