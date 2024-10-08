// Import necessary parts of Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the Sequelize instance
const sequelize = require('../config/connection');

// Define the Category model
class Category extends Model {}

// Initialize the Category model with its attributes
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Export the Category model
module.exports = Category;