// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer'); // Import multer for file uploads
const path = require('path');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({ path: './config.env' });
require('./db/conn');
const port = process.env.PORT || 5000;

// Require Models
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const Student = require('./models/studentSchema'); // Import the student schema
const Company = require('./models/companySchema'); // Import the company schema
const Application = require('./models/applicationSchema'); // Import the application schema
const authenticate = require('./middleware/authenticate');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/resumes'); // Folder where resumes will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save files with a unique timestamp
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Set file size limit (5 MB)
    fileFilter: (req, file, cb) => {
        const fileTypes = /pdf|doc|docx/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        if (extname) {
            return cb(null, true);
        } else {
            cb(new Error("Only .pdf, .doc, and .docx files are allowed!"));
        }
    }
});

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Update this line
app.use(cors({ 
    origin: ['http://localhost:3000', 'http://localhost:3002'], // Add your new frontend URL here
    credentials: true 
}));  

// Default Route
app.get('/', (req, res) => {
    res.send("Hello from the backend!");
});

// Registration
app.post('/register', async (req, res) => {
    try {
        // Get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        });

        // Save Method is Used to Create User or Insert User
        // But Before Saving or Inserting, Password will Hash 
        // Because of Hashing. After Hash, It will save to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send(error);
    }
});

// Login User
app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Find User if Exist
        const user = await Users.findOne({ email: email });
        if (user) {
            // Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);

            if (isMatch) {
                // Generate Token Which is Define in User Schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Expires Token in 24 Hours
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                });
                res.status(200).send("LoggedIn");
            } else {
                res.status(400).send("Invalid Credentials");
            }
        } else {
            res.status(400).send("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

// Message
app.post('/message', async (req, res) => {
    try {
        // Get body or Data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name: name,
            email: email,
            message: message
        });

        // Save Method is Used to Create User or Insert User
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");
    } catch (error) {
        res.status(400).send(error);
    }
});

// Logout Page
app.get('/logout', (req, res) => {
    res.clearCookie("jwt", { path: '/' });
    res.status(200).send("User Logged Out");
});

// Authentication
app.get('/auth', authenticate, (req, res) => {

});

// Student Registration (New functionality for student management)
app.post('/students', async (req, res) => {
    try {
        const { name, className, email, phone, resumeLink, tenthPercentage, twelfthPercentage, graduationCGPA } = req.body;

        // Create a new student
        const newStudent = new Student({
            name,
            className,
            email,
            phone,
            resumeLink,
            tenthPercentage,
            twelfthPercentage,
            graduationCGPA
        });

        // Save the student to the database
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a student
app.delete('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Student.findByIdAndDelete(id);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Filter students based on 10th, 12th, or Graduation CGPA
app.get('/students/filter', async (req, res) => {
    try {
        const { tenthPercentage, twelfthPercentage, graduationCGPA } = req.query;

        const filter = {};
        if (tenthPercentage) filter.tenthPercentage = { $gte: tenthPercentage };
        if (twelfthPercentage) filter.twelfthPercentage = { $gte: twelfthPercentage };
        if (graduationCGPA) filter.graduationCGPA = { $gte: graduationCGPA };

        const filteredStudents = await Student.find(filter);
        res.status(200).json(filteredStudents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// New endpoint to fetch all companies
app.get('/companies', async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// New endpoint to create a company announcement
app.post('/companies', async (req, res) => {
    try {
        const { name, description, jobDescription, driveDate } = req.body;

        const newCompany = new Company({
            name,
            description,
            jobDescription,
            driveDate
        });

        // Save the company to the database
        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Application submission endpoint
app.post('/applications', authenticate, async (req, res) => {
    try {
        const { companyName } = req.body;

        // Create a new application
        const newApplication = new Application({
            userId: req.userId, // Assuming user is authenticated and userId is available
            companyName: companyName,
            // dateOfApplication is set automatically, and status is set to 'Applied'
        });

        // Save the application to the database
        const savedApplication = await newApplication.save();
        res.status(201).json(savedApplication);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch applications for the authenticated user
app.get('/applications', authenticate, async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.userId });
        res.status(200).json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Application Submission Route (with file upload for resume)
app.post('/applications', authenticate, upload.single('resume'), async (req, res) => {
    try {
        const { companyName } = req.body;

        // Check if a file (resume) was uploaded
        if (!req.file) {
            return res.status(400).json({ message: "Resume is required" });
        }

        const newApplication = new Application({
            userId: req.userId, // Assuming userId is set by the authenticate middleware
            companyName,
            resume: req.file.path // Store the path of the uploaded resume
        });

        const savedApplication = await newApplication.save();
        res.status(201).json(savedApplication);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch applications for authenticated user
app.get('/applications', authenticate, async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.userId });
        res.status(200).json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Run Server 
app.listen(port, () => {
    console.log(`Server is Listening on port ${port}`);
});
