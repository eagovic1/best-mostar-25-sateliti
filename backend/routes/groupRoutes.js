const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const group = require('../models/group');

/**
 * Route for creating a group
 */
router.post('', groupController.createGroup);

/**
 * Route for getting a group by id
 */
router.get('/:id', groupController.getGroup);

/**
 * Route for updating a group by id
 */
router.put('/:id', groupController.updateGroup);

/**
 * Route for deleting a group by id
 */
router.delete('/:id', groupController.deleteGroup);

/**
 * Route for getting all groups
 */
router.get('/all', groupController.getGroups);

/**
 * Route for joining a group
 */
router.post('/join-group', groupController.joinGroup);

/**
 * Route for leaving a group
 */
router.delete('/leave-group', groupController.leaveGroup);

/**
 * Route for getting number of events participated by a group
 */
router.get('/events/all', groupController.numOfEventsByGroup);

module.exports = router;