module.exports = (app) => {
    /* TEST: message Hello user on localhost:8080/status */
    app.get('/status', (req, res) => {
        res.send({
          message: 'Hello user'
        })
      })
      
      /* API: Register message */
      app.post('/register', (req, res) => {
        res.send({
          message: `Hello ${req.body.email} Your user was registered!`
        })
      })
}
