const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: [true, 'Please enter product title'],
  },
  description: {
    type: String,
    // required: [true, 'Please enter product description'],
  },
  price: {
    type: Number,
    // required: [true, 'Please enter product price'],
  },
  category: {
    type: String,
    // required: [true, 'Please enter product category'],
  },
  image: {
    type: String,
    default: ''
  },
  brand: {
    type: String
  },
  countInStock: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
