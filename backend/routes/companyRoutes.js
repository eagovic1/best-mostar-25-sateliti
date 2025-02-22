const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

/**
 * Route for registering company
 */
router.post("/register", companyController.register);
/**
 * Route for logging in company
 */
router.post("/login", companyController.login);
/**
 * Route for updating company by id
 */
router.put("/:id", companyController.edit);
/**
 * Route for deleting company by id
 */
router.delete("/:id", companyController.delete);

module.exports = router;