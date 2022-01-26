// Import the routes in the /routes folder so that it's available for use

const express = require('express');
const routes = require('./routes');

// import the connection settings
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// turn on routes
app.use(routes);

// turn on connection to db and server
// {force: true} forces MySQL to recreate tables if there are association changes with them.
sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});