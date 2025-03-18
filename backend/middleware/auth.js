const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate.' });
  }
};

const isTherapist = (req, res, next) => {
  if (req.user.role !== 'therapist') {
    return res.status(403).json({ error: 'Access denied. Only therapists can perform this action.' });
  }
  next();
};

module.exports = { auth, isTherapist };
