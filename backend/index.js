const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const path = require('path')
const cors = require('cors')
require('dotenv').config();

const app = express();

const classRoutes = require('./routes/courseRoutes')
const authRoute = require("./routes/AuthRoutes");

const PORT = process.env.PORT || 4000;

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});
app.use(cors({
    origin: "https://divcourses.vercel.app",
    credentials: true,
    exposedHeaders: ["Set-Cookie"]
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', classRoutes)
app.use('/api', authRoute);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
const atlasConnectionUri = process.env.MONGODB_URL;
mongoose.connect(atlasConnectionUri, {
    dbName: 'subjects'
});

app.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: "Welcome to Home Route 🏠" })
    } catch (error) {
        res.status(500).json({ message: "Error in Home Route ❌" })
    }
});

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`);
});
