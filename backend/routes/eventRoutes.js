const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

//post da doda novi event
router.post('/', eventController.addEvent);
//get da dohvati event
router.get('/:id', eventController.getEvent);
//put za svaki join???
router.put('/:id', eventController.updateEvent);
//delete da izbrise event
router.delete('/:id', eventController.removeEvent);