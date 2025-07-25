const Order = require("../Models/Order");


// Place a new order
exports.placeOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod, totalAmount } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    const order = await Order.create({
      userId: req.user.id,
      orderItems,
      shippingAddress,
      paymentMethod,
      totalAmount,
      paymentStatus: 'paid', // or 'pending'
      isDelivered: false
    });

    res.status(201).json(order);
  } catch (err) {
    console.error('Order Error:', err);
    res.status(500).json({ message: 'Failed to place order' });
  }
};

// Get logged-in user's orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('orderItems.productId');

    if(!orders){
      res.json("no order found")
    }

    res.json(orders);

  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

// Get all orders (admin only)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId', 'name email');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch all orders' });
  }
};
