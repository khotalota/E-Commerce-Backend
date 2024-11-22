const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware.authenticateToken);

router.post('/cart/add', cartController.addToCart);
router.put('/cart/update', cartController.updateCart);
router.delete('/cart/delete', cartController.deleteFromCart);
router.get('/cart', cartController.getCart);

module.exports = router;

