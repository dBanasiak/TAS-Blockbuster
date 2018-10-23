const AuthenticationController = require('./controllers/AuthenticationController')
const Status = require('./controllers/Status')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    /* TEST: message Hello user on localhost:8080/status */
    app.get('/status', Status.status)
    /* API: Register */
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
    app.post('/login',
    AuthenticationController.login)
}
