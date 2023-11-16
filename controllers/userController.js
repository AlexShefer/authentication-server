const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);

        // crate a token
        const token = createToken(user._id);
        const { userName } = user;

        res.status(200).json({ userName, email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// signup a user
const signupUser = async (req, res) => {
    const { userName, email, password } = req.body;
    console.log(userName, email, password);
    try {
        const user = await User.signup(userName, email, password);

        // crate a token
        const token = createToken(user._id);

        res.status(200).json({ userName, email, token });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser, loginUser };