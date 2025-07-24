const jwt = require('jsonwebtoken');
const User = require('../Models/User');



const protect = async (req, res, next) => {
  const token = req.headers.authorization; 

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }

    next();
  } catch (error) {
    console.error('JWT Error:', error.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Middleware: Admin check
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  } else {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
};

module.exports = { protect, isAdmin };
