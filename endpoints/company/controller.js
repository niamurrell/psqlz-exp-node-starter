const db = require('../../db/config.js');
const Company = db.company;
const Product = db.product;

// Init data: Companies & Products
exports.init = (req, res) => {

	// Apple company
	Company.create({
		name: 'Apple',
		street: 'Cupertino, CA 95014',
		phone: '1-408-996-1010',
		products: [
			// IPhone 7 
			{
				code: "A-123",
				name: "Iphone7",
				details: "Price: 649.00 USD & FREE shipping"
			},
			// IPadPro
			{
				code: "A-456",
				name: "IPadPro",
				details: "Price: 417.67 USD & FREE shipping"
			}
		]
	}, {
			include: [Product]
		}).then(() => {

			console.log("-----------> Apple is created");

			// Samsung company
			Company.create({
				name: 'Samsung',
				street: 'Seocho District, Seoul, South Korea',
				phone: '+82-2-2053-3000',
				products: [
					// GalaxyJ7 
					{
						code: "S-012",
						name: "GalaxyJ7",
						details: "Price: 219.00 USD & FREE shipping"
					},
					// GalaxyTabA
					{
						code: "S-456",
						name: "GalaxyTabA",
						details: "Price: 299.99 USD & FREE shipping"
					}
				]
			}, {
					include: [Product]
				}).then(() => {
					console.log("-----------> Samsung is created");
				})
		}).then(() => {
			res.send("Done!");
		})
};

// Add a new product to an existing company
exports.addProduct = (req, res) => {
	Company.findAll({
		where: {
			name: req.body.name
		}
	}).then(foundCompany => {
		const id = foundCompany[0].dataValues.uuid;
		return Product.create({
			code: "A-456",
			name: "IphoneX",
			details: "Price: 999.00 USD & FREE shipping",
			fk_companyid: id
		})
	}).then(() => {
		res.send("Product added!");
	});
};

// Fetch all Companies include Products
exports.findAll = (req, res) => {
	Company.findAll({
		attributes: [['uuid', 'companyId'], 'name', 'street', 'phone'],
		include: [{
			model: Product,
			// This line was in tutorial but breaks the app:
			// where: { fk_companyid: db.Sequelize.col('company.uuid') },
			attributes: ['code', 'name', 'details']
		}]
	}).then(companies => {
		res.send(companies);
	});
};
