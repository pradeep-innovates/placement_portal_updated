const mongoose = require('mongoose');

// Define the Student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    resumeLink: {
        type: String,
        required: true
    },
    tenthPercentage: {
        type: Number,
        required: true
    },
    twelfthPercentage: {
        type: Number,
        required: true
    },
    graduationCGPA: {
        type: Number,
        required: true
    }
});

// Export the model
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
