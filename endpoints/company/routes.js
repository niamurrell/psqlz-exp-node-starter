module.exports = function (app) {

	const companies = require('./controller.js');

	// Init data: Companies & Products
	app.get('/api/companies/init', companies.init);

	// Add product to existing company
	app.get('/api/companies/add-product', companies.addProduct);

	// Retrieve all Companies
	app.get('/api/companies/all', companies.findAll);
}