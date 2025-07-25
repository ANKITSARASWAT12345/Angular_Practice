const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Product title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price must be a positive number']
  },
  category: {
    type: String,
    enum: ['Electronics', 'Clothing', 'Footwear', 'Books', 'Home', 'Grocery', 'Beauty'],
    required: [true, 'Product category is required']
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/150'
  },
  brand: {
    type: String,
    default: 'Generic'
  },
  countInStock: {
    type: Number,
    min: [0, 'Count in stock must be 0 or more'],
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
