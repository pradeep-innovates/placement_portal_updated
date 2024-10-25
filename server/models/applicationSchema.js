const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    dateOfApplication: {
        type: Date,
        default: Date.now,  // Automatically set the current date
    },
    status: {
        type: String,
        default: "Applied",  // Default status when applying
    }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
