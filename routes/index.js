const router = require('express').Router();
const categoryRoutes = require('./api/category-routes');
const productRoutes = require('./api/product-routes');
const tagRoutes = require('./api/tag-routes');

// Use the API routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Export the router
module.exports = router;