const express = require('express');
const app = express();

// Parse body data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Set Environment
const nodeEnv = process.env.NODE_ENV || 'development';
if (nodeEnv === 'development') {
	require('dotenv').config();
}

// Connect Database
const db = require('./db/config');

// Connect + Add New Models
db.sequelize.sync({ force: true })
	.then(() => {
		console.log('Database connected & synched.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

// Load Routes
require('./endpoints/customer/routes.js')(app);
require('./endpoints/company/routes.js')(app);
require('./endpoints/project/routes.js')(app);

const port = process.env.PORT;
app.listen(port, () =>
	console.log(`App is running on port ${port} in ${nodeEnv} mode.`)
);