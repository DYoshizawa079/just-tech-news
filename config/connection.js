// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// Create a new connection to our database, pass in your MySQL information for username and password
// first parameter id Database name
// second parameter is mysql username
// third parameter is mysql password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host : 'localhost',
    dialect : 'mysql',
    port : 3306
});

// export the connection
module.exports = sequelize;