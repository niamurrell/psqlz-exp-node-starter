module.exports = function (app) {

	const customers = require('./controller.js');

	// Create a new Customer
	app.post('/api/customers', customers.create);

	// Retrieve all Customer
	app.get('/api/customers', customers.findAll);
}