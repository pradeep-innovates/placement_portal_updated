// models/companySchema.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    jobDescription: { type: String, required: true },
    driveDate: { type: String, required: true }, // Registration Deadline
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
