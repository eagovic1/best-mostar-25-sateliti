const express = require('express');
const router = express.Router();

const volunteerRoutes = require('./volunteerRoutes');
const companyRoutes = require('./companyRoutes');
const eventRoutes = require('./eventRoutes');
const groupRoutes = require('./groupRoutes');

router.use('/users', volunteerRoutes);
router.use('/companies', companyRoutes);
router.use('/events', eventRoutes);
router.use('/groups', groupRoutes);

module.exports = router;