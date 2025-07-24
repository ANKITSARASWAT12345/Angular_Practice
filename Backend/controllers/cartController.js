const Cart = require("../Models/Cart");


// Add product to cart
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    if (cart) {
      const index = cart.products.findIndex(
        (p) => p.productId.toString() === productId
      );

      if (index > -1) {
        cart.products[index].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }

      await cart.save();
    } else {
      cart = await Cart.create({
        userId,
        products: [{ productId, quantity }],
      });
    }

    res.json(cart);
  } catch (err) {
    console.error('Add to cart error:', err);
    res.status(500).json({ message: 'Failed to add to cart' });
  }
};

// Get logged-in user's cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      'products.productId'
    );
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get cart' });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.products = cart.products.filter(
      (p) => p.productId.toString() !== productId
    );

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove item from cart' });
  }
};
