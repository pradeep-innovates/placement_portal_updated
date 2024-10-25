const Users = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        // Get the Cookies
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).send("No token"); // Use return to stop further execution
        } else {
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await Users.findOne({ _id: verifyToken._id, "tokens.token": token });

            if (!rootUser) {
                return res.status(401).send("User Not Found"); // Use return to stop further execution
            } else {
                req.rootUser = rootUser; // Optionally attach user info to the request object
                return res.status(200).send("Authorized User"); // Use return to stop further execution
            }
        }
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).send("Error"); // Use return to stop further execution
    }

    next(); // This will only be reached if no response has been sent
}

module.exports = authenticate;
