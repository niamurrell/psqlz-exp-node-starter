# PostgreSQL/Sequelize Node Express Starter App

## Description

This is a demo app to test a Node/Express app using Postgres with Sequelize ORM. It is the result of this tutorial:
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
* Open `.env.default` and copy/paste into new file in root director `.env`. Fill in the environment variables.
* Open Postgres command line using `psql` and then in the Postgres command line:
		* Create a new user for this app's database: `CREATE ROLE username WITH LOGIN PASSWORD 'password' CREATEDB;`. **username** and **password** should match what you've added to the `.env` file.
		* Create a database for this app: `CREATE DATABASE dbname;`. **dbname** should match what you've added to the `.env` file.

## Run The App

* `npm run start`
* Open Postman to play around with the queries and results