const User = require("../schema/userSchema");
const { createSecretToken } = require("../utilities/cryptoken");
const bcrypt = require('bcrypt')

const Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username, createdAt })
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user })
        next()
    }
    catch (error) {
        console.log(error);
    }
};

const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

const Login = async (req, res, next) => {

console.log('Request received:', req.body);
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.json({ message: "All fields required" })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ message: "Incorrect email or password" })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.json({ message: "Incorrect email or password" })
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    Signup,
    getUsers,
    Login
}
