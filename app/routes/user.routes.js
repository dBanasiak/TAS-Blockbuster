module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/user', user.create);

    // Retrieve all user
    app.get('/user', user.findAll);

    // Retrieve a single User with UserId
    app.get('/user/:userId', user.findOne);

    // Update a User with UserId
    app.put('/user/:Id', user.update);

    // Delete a User with UserId
    app.delete('/user/:UserId', user.delete);
}