const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

//post da doda novi event
router.post('', eventController.addEvent);
//get da dohvati event
router.get('', eventController.getEvent);
//put za svaki join???
router.get('', eventController.updateEvent);
//delete da izbrise event
router.get('', eventController.removeEvent);