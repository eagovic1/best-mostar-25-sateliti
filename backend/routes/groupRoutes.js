const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController'); 
const group = require('../models/group');
//post - kreiraj grupu
router.post('', groupController.createGroup);
//get - vrati grupu
router.get('', groupController.getGroup);
//put - edituj
router.put('', groupController.updateGroup);
//delete - izbrisi grupu
router.delete('', groupController.deleteGroup);
//get - vrati sve grupe
router.get('/all', groupController.getGroups);
//post - dodaj volontera u grupu
router.post('/join-group', groupController.joinGroup);
//delete - izbaci volontera iz grupe
router.delete('/leave-group', groupController.leaveGroup);

module.exports = router;