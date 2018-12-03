const { Movies } = require('../models')

module.exports = {
  async addMovie (req, res) {
    try {
      const movie = await Movies.create(req.body)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to add movie'
      })
    }
  },
  async getAllMovies (req, res) {
    try {
      let movies = null
      const search = req.query.search
      if (search) {
        movies = await Movies.findAll()
      } else {
        movies = await Movies.findAll({
          limit: 10
        })
      }
      res.send(movies)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the movies'
      })
    }
  }
}
