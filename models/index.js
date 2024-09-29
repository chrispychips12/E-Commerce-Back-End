// Import all models
const Category = require('./Category');
const Product = require('./product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations between models
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// Export all models
module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};