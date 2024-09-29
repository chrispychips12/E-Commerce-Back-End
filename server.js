// Import necessary modules
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in the routes folder
app.use(routes);

// Sync Sequelize models to the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});