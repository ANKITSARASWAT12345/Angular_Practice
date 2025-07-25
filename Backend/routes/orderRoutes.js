const express = require('express');
const router = express.Router();
const {
  placeOrder,
  getUserOrders,
  getAllOrders
} = require('../controllers/orderController');

const { protect, isAdmin } = require('../middleware/authMiddleware');


   

router.post('/', protect, placeOrder);
router.get('/my-orders', protect, getUserOrders);
router.get('/', protect, isAdmin, getAllOrders); // admin only

module.exports = router;
