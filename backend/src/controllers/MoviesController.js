const { Movies } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let movies = null
      const search = req.query.search
      if (search) {
        movies = await Movies.findAll({
          where: {
            $or: [
              'title', 'director', 'stars', 'status'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
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
  },
  async show (req, res) {
    try {
      const movie = await Movies.findById(req.params.movieId)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the movies'
      })
    }
  },
  async post (req, res) {
    try {
      const movie = await Movies.create(req.body)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the movie'
      })
    }
  },
  async put (req, res) {
    try {
      await Movies.update(req.body, {
        where: {
          id: req.params.movieId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the movie'
      })
    }
  }
}
