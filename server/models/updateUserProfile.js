const Users = require('./models/userSchema');

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updateUser = await user.save();

        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            token: generateToken(updateUser._id),
        });
    }
    else {
        res.status(404);
        throw new Error("User Not Found")
    }
});

module.exports = { updateUserProfile };