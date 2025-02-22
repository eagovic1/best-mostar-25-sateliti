const db = require('../config/db');
const Company = db.Company;
const bcrypt = require('bcrypt');

/**
 * Method to register a new company
 */
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const company = await Company.findOne({ where: { email } });
        if (company) {
            return res.status(400).json({ message: "Company with this e-mail already exists!" });
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const newCompany = await Company.create({ name, email, password: hashedPass });

        res.status(201).json({ message: "Successfully registered!", company: newCompany });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

/**
 * Method to login a company
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const company = await Company.findOne({ where: { email } });
        if (!company) {
            return res.status(400).json({ message: "Company with that e-mail doesn't exist!" });
        }

        const isMatch = await bcrypt.compare(password, company.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password!" });
        }

        res.status(200).json({ message: "Logged in successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

/**
 * Method to edit company profile by id
 */
exports.edit = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const companyId = req.params.id || req.company.companyId;

        const company = await Company.findByPk(companyId);
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }

        company.name = name || company.name;
        company.email = email || company.email;
        if (password) {
            company.password = await bcrypt.hash(password, 10);
        }

        await company.save();

        res.status(200).json({ message: "Profile edited!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

/**
 * Method to delete company by id 
 */
exports.delete = async (req, res) => {
    try {
        const companyId = req.params.id || req.company.companyId;

        const company = await Company.findByPk(companyId);
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }

        await company.destroy();

        res.status(200).json({ message: "Company deleted!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

/**
 * Method to change emission value
 */
exports.changeEmissionValue = (emmisionValue, companyId) => {
    Company.update({ current_emission_value: emmisionValue }, { where: { id: companyId } });
}