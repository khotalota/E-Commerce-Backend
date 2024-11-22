const Order = require('../models/order');
const Cart = require('../models/cart');

exports.placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const shippingAddress = req.body.shippingAddress;

    const cart = await Cart.findOne({ userId }).populate('products');
    if (!cart || cart.products.length === 0) throw new Error('Cart is empty');

    const order = await Order.create({
      userId,
      products: cart.products,
      shippingAddress,
      status: 'pending'
    });

    // Clear cart after placing order
    await Cart.updateOne({ userId }, { $set: { products: [] } });

    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId').populate('products');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCustomerOrders = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const orders = await Order.find({ userId: customerId })
      .populate('userId')
      .populate('products');
    res.json(orders);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

