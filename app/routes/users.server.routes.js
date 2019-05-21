const users = require('../../app/controllers/users.server.controller');

module.exports = function (app) {
	app.route('/users')
		.post(users.create)
		.get(users.list);

	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);

	// you use the app.param() method, which defines a middleware to be 
	// executed before any other middleware that uses that parameter.
	app.param('userId', users.userByID);
}