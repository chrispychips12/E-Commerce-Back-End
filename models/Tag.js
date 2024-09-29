// Import necessary parts of Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the Sequelize instance
const sequelize = require('../config/connection');

// Define the Tag model
class Tag extends Model {}

// Initialize the Tag model with its attributes
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export the Tag model
module.exports = Tag;