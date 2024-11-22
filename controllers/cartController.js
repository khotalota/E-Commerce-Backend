const Cart = require('../models/cart');
const Product = require('../models/product');

exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.body.productId;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = await Cart.create({ userId });
    }

    cart.products.push(productId);
    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.body.productId;
    const quantity = req.body.quantity;

    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $inc: { [`products.${productId}`]: quantity } },
      { new: true }
    );

    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.body.productId;

    await Cart.updateOne(
      { userId },
      { $pull: { products: productId } }
    );

    res.json({ message: 'Product removed from cart' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

