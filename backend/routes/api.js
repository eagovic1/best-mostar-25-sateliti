const express = require('express');
const router = express.Router();

const volunteerRoutes = require('./volunteerRoutes');

router.use('/users', volunteerRoutes);

module.exports = router;