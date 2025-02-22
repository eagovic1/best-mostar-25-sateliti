const express = require('express');
const router = express.Router();

const volunteerRoutes = require('./volunteerRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/users', volunteerRoutes);
router.use('/events', eventRoutes);

module.exports = router;