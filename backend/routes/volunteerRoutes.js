const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

/**
 * Route for registering volunteer
 */
router.post("/register", volunteerController.register);
/**
 * Route for logging in volunteer
 */
router.post("/login", volunteerController.login);
/**
 * Route for updating volunteer by id
 */
router.put("/:id", volunteerController.edit);
/**
 * Route for deleting volunteer by id
 */
router.delete("/:id", volunteerController.delete);

module.exports = router;