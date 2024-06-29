const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")

const path = require('path')
require('dotenv').config();

const app = express();

const classRoutes = require('./routes/courseRoutes')
const authRoute = require("./routes/AuthRoutes");

const PORT = process.env.PORT || 4000;

app.use(express.static(__dirname, '/dist'));

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', classRoutes)
app.use("/api", authRoute);

const atlasConnectionUri = process.env.MONGODB_URL;
mongoose.connect(atlasConnectionUri, {
    dbName: 'subjects'
});

app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`);
});
