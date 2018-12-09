const db = require('../db/config.js');
const Customer = db.customers;
const Address = db.address;

// Post a Customer
exports.create = (req, res) => {
	// Save to database

	var customer;
	Customer.create({
		// This line was commented out in the tutorial:
		//customerid: db.sequelize.Utils.generateUUID(),
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		age: req.body.age
	}).then(createdCustomer => {
		// Send created customer to client
		customer = createdCustomer;

		return Address.create({
			street: req.body.street,
			phone: req.body.phone
		})
	}).then(address => {
		customer.setAddress(address)
		res.send('OK');
	})
};

// FETCH all Customers include Addresses
exports.findAll = (req, res) => {
	Customer.findAll({
		// attributes: [['existing column name', **AS** 'display column name]' ... ],
		attributes: [['uuid', 'customerId'], ['firstname', 'name'], 'age'],
		include: [{
			model: Address,
			// This line was in tutorial but breaks the app:
			// where: { fk_customerid: db.Sequelize.col('customer.uuid') },
			attributes: ['street', 'phone']
		}]
	}).then(customers => {
		res.send(customers);
	});

};