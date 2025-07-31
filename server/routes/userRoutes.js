const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userInfo = require('../schemas/userInfo')

//save user info
router.post('/save', async (res, req) => {
  try {
    const data = new userInfo(req.body);
    await data.save();
    res.status(201).json({ message: 'saved' })
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

// Get user info
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const data = await userInfo.findOne({ userId });
  res.json(data);
});


module.exports = router;