const Product = require("../Models/Product");


exports.createProduct=async(req,res)=>{

  try{
 const { title, description, price, category, image, brand, countInStock } = req.body;

    const product=new Product({
      title,
      description,
      price,
      category,
      image,
      brand,
      countInStock
    })

    const savedProduct=await product.save();
    res.status(201).json(savedProduct);

  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}


exports.getAllProducts=async(req,res)=>{
  try{
     const products=await Product.find({});
     res.json(products);

  }
  catch(err){
    res.status(500).json({error:err.message});
  }
}

exports.getProductById=async(req,res)=>{
  try{
     const product=await Product.findById(req.params.id);
     if(!product){
      return res.status(404).json({error:"Product not found"});
     }
     res.json(product);
  }
  catch(err){
    res.status(500).json({error:err.message});

  }
}

exports.updateProduct=async(req,res)=>{
  try{
    const{title,description,price,category,countInStock,image,brand}=req.body;
    const product=await Product.findById(req.params.id);
       if (!product) return res.status(404).json({ error: 'Product not found' });
       product.title=title?? product.title;
       product.description=description?? product.description;
       product.price=price?? product.price;
       product.category=category?? product.category;
       product.countInStock=countInStock?? product.countInStock;
       product.image=image ?? product.image;
       product.brand=brand ?? product.brand;

       const updatedProduct=await product.save();
       res.json(updatedProduct);
  }

  catch(err){
    res.status  (400).json({error:err.message});
  }
}

exports.deleteProduct=async(req,res)=>{
  try{
    const product=await Product.findByIdAndDelete(req.params.id);
     if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({message:"Product deleted successfully"})
  }

  catch(err){
    res.status(500).json({error:err.message})
  }
}