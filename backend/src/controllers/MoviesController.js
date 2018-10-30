const { Movie } = require('../models')

module.exports = {
  async addMovie (req, res) {
    try {
      const movie = await Movie.create(req.body)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to add movie'
      })
    }
  },
  async getAllMovies (req, res) {
    try {
      const movies = await Movie.findAll({
        limit: 15
      })
      res.send(movies)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get your movies list'
      })
    }
  }
}
