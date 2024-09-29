require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER, // PostgreSQL username
    password: process.env.DB_PASSWORD, // PostgreSQL password
    database: process.env.DB_NAME, // Database name
    host: process.env.DB_HOST, // Database host
    dialect: 'postgres', // Database dialect
  },

};