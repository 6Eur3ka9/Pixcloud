const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const multer = require('multer');
const router = express.Router();
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profile_pictures',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    public_id: (req, file) => {
      return file.originalname.split('.')[0] + Date.now(); 
    },
  },
});

const upload = multer({ storage: storage });

router.post('/register', async (req, res) => {
  const { username, email, password, date } = req.body;
    const created_at = new Date();
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    console.log(req.body);
    const existingUser = await User.findOne({ email }, { username });
    if (existingUser) {
      return res.status(400).json({ error: 'Email or username already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      date
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' , userId: newUser._id });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
    console.error(error);
  }
});

module.exports = router;