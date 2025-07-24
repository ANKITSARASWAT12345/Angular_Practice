const Product = require("../Models/Product");



exports.createProduct = async (req, res) => {

  const product = await Product.create(req.body);
  console.log(product);
  res.status(201).json(product);

};


exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);

};


exports.updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};



exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id); 
  res.json({ message: 'Product deleted' });     
};
