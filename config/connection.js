// Import Sequelize library
const Sequelize = require('sequelize');
// Load environment variables from .env file
require('dotenv').config();

// Create a new Sequelize instance with database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  }
);

// Export the Sequelize instance for use in other files
module.exports = sequelize;