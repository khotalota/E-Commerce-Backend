const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware.authenticateToken);

router.post('/addproduct', productController.addProduct);
router.put('/updateproduct/:productId', productController.updateProduct);
router.delete('/deleteproduct/:productId', productController.deleteProduct);
router.get('/products', productController.getAllProducts);

module.exports = router;

