const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart
} = require('../controllers/cartController');

const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/', getCart);
router.post('/', addToCart);
router.delete('/:productId', removeFromCart);

module.exports = router;
