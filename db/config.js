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
db.company = require('./Company.js')(sequelize, Sequelize);
db.product = require('./Product.js')(sequelize, Sequelize);
db.project = require('./Project.js')(sequelize, Sequelize);
db.user = require('./User.js')(sequelize, Sequelize);

// Create Associations

// ONE TO ONE ASSOCIATION
db.address.belongsTo(db.customers);
db.customers.hasOne(db.address);

// Renames column in target (addresses) to 'fk-customerid'...otherwise the default is customerUuid (table name + column name in camelCase)
// db.address.belongsTo(db.customers, { foreignKey: 'fk_customerid', targetKey: 'uuid' });
// db.customers.hasOne(db.address, { foreignKey: 'fk_customerid', targetKey: 'uuid' });

// ONE TO MANY ASSOCIATION
db.company.hasMany(db.product, { foreignKey: 'fk_companyid', sourceKey: 'uuid' });
db.product.belongsTo(db.company, { foreignKey: 'fk_companyid', targetKey: 'uuid' });

// MANY TO MANY ASSOCIATION
// NOTE 'through' is required to create join table between 'users' and 'projects'
db.project.belongsToMany(db.user, { as: 'Workers', through: 'worker_tasks', foreignKey: 'projectId', otherKey: 'userId' });
db.user.belongsToMany(db.project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId', otherKey: 'projectId' });

module.exports = db;
