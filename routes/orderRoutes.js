const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware.authenticateToken);

router.post('/placeorder', orderController.placeOrder);
router.get('/getallorders', orderController.getAllOrders);
router.get('/orders/customer/:customerId', orderController.getCustomerOrders);

module.exports = router;

