module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    director: DataTypes.STRING,
    writers: DataTypes.STRING,
    stars: DataTypes.STRING,
    rate: DataTypes.STRING,
    movieCoverUrl: DataTypes.STRING
  })

  Movies.associate = function (models) {
  }

  return Movies
}
