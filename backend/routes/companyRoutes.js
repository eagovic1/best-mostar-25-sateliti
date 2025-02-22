const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post("/register", companyController.register);
router.post("/login", companyController.login);
router.put("/:id", companyController.edit);
router.delete("/:id", companyController.delete);

module.exports = router;