const Sequelize = require('sequelize');

// Connect Database
const sequelize = new Sequelize(
	process.env.PG_DATABASE,
	process.env.PG_USER,
	process.env.PG_PASSWORD,
	{
		host: process.env.PG_HOST,
		dialect: 'postgres',
		port: process.env.PG_PORT,
		operatorsAliases: false,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load Models
db.customers = require('./Customer')(sequelize, Sequelize);
db.address = require('./Address')(sequelize, Sequelize);

// Create Associations

// ONE TO ONE ASSOCIATION
db.address.belongsTo(db.customers, { foreignKey: 'fk_customerid', targetKey: 'uuid' });
db.customers.hasOne(db.address, { foreignKey: 'fk_customerid', targetKey: 'uuid' });

// Renames column in target (addresses) to 'fk-customerid'...otherwise the default is customerUuid (table name + column name in camelCase)
// db.address.belongsTo(db.customers, { foreignKey: 'fk_customerid', targetKey: 'uuid' });
// db.customers.hasOne(db.address, { foreignKey: 'fk_customerid', targetKey: 'uuid' });

module.exports = db;
