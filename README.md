# PostgreSQL/Sequelize Node Express Demo App For Associations

## Description

This is a demo app to practice with associations in a Node/Express app using Postgres with Sequelize ORM. It is the result of this tutorial:
- [Part 1: Sequelize ORM – Build CRUD RestAPIs with NodeJs/Express, Sequelize, MySQL](https://grokonez.com/node-js/sequelize-orm-build-crud-restapis-with-nodejs-express-sequelize-mysql)
- [Part 2: Sequelize One-To-One association – NodeJS/Express, MySQL](https://grokonez.com/node-js/sequelize-one-to-one-association-nodejs-express-mysql)
- [Part 3: Sequelize One-To-Many association – NodeJS/Express, MySQL](https://grokonez.com/node-js/sequelize-one-to-many-association-nodejs-express-mysql)
- [Part 4: Sequelize Many-to-Many association – NodeJS/Express, MySQL](https://grokonez.com/node-js/sequelize-many-to-many-association-nodejs-express-mysql)

The tutorial basically follows the [Sequelize Docs about Associations](http://docs.sequelizejs.com/manual/tutorial/associations.html). 

The original tutorial uses MySQL instead of Postgres...visit the site to see how.

## Requirements - Install These First

* [nvm](https://github.com/creationix/nvm)
* [Postman](https://www.getpostman.com/)

## Installation

* Clone repo and `cd` into directory
* `nvm use`
* `npm i`
* Open `.env.default` and copy/paste into new file in root director `.env`. Fill in the environment variables. For the sake of this readme `PORT` is set to 4000.
* Open Postgres command line using `psql` and then in the Postgres command line:
	* Create a new user for this app's database: `CREATE ROLE username WITH LOGIN PASSWORD 'password' CREATEDB;`. **username** and **password** should match what you've added to the `.env` file.
	* Create a database for this app: `CREATE DATABASE dbname;`. **dbname** should match what you've added to the `.env` file.

> NOTE: The master branch is the final demo after all 4 tutorials. The ending point of each tutorial is in its own branch.

## Run The App

* `npm run start`
* Open Postman to play around with the queries and results. Open the **Body** tab and make sure `x-www-form-urlencoded` iss selected.
* Some routes to try out:
	* **POST** to `localhost:4000/api/customers`. You can add data for `firstname`, `lastname`, `age`, `street`, and `phone`. You will see the address data is linked to the customer by association. Repeat with more customer data if you want.
	* **GET** to `localhost:4000/api/customers`. You will see the associated data for all customers (with address) you added in previous step.
	* **GET** to `localhost:4000/api/companies/init`. You will seed some company data and see a 'Done!' success message.
	* **GET** to `localhost:4000/api/companies/all`. You will the companies with their associated products listed.
	* **GET** to `localhost:4000/api/projects/init`. You will seed some project and user data and see a 'OK' success message.
	* **GET** to `localhost:4000/api/projects/all`. You will the projects with their associated workers listed.

	Play around with different ways to insert and query data to learn more about using Sequelize associations (sandbox branches). 