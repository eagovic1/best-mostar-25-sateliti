const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

router.post("/register", volunteerController.register);
router.post("/login", volunteerController.login);
router.put("/:id", volunteerController.edit);
router.delete("/:id", volunteerController.delete);

module.exports = router;