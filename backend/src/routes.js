const AuthenticationController = require('./controllers/AuthenticationController')
const Status = require('./controllers/Status')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const MoviesController = require('./controllers/MoviesController')

module.exports = (app) => {
  /* TEST: message Hello user on localhost:8080/status */
  app.get('/status', Status.status)

  /* API: Register endpoint */
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  /* API: Login endpoint */
  app.post('/login',
    AuthenticationController.login)

  // /* API: All movies endpoint */
  // app.get('/movies',
  //   MoviesController.getAllMovies)

  // /* API: Add new movie endpoint */
  // app.post('/movies',
  //   MoviesController.addMovie)

  app.get('/movies',
    MoviesController.index)
  app.get('/movies/:movieId',
    MoviesController.show)
  app.put('/movies/:movieId',
    MoviesController.put)
  app.post('/movies',
    MoviesController.post)
}
