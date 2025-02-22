const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

/**
 * Route for adding event
 */
router.post('/', eventController.addEvent);
/**
 * Route for getting all events
 */
router.get('/', eventController.getAllEvents);
/**
 * Route for getting event by id
 */
router.get('/:id', eventController.getEvent);
/**
 * Route for updating event by id
 */
router.put('/:id', eventController.updateEvent);
/**
 * Route for deleting event by id
 */
router.delete('/:id', eventController.removeEvent);
/**
 * Route for adding event participant
 */
router.post('/:id/participants', eventController.addParticipant);
/**
 * Route for removing event participant
 */
router.post("/:id/participants/remove", eventController.removeParticipant);
/**
 * Route for confirming event pariticipation
 */
router.post("/:id/participants/confirm", eventController.confirmParticipant);