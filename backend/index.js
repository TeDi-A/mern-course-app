const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const bcrypt = require('bcrypt')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
=======
const path = require('path')
>>>>>>> b08850e3dc41f290082575d7b6c8228d0c77dc43
require('dotenv').config();

const app = express();

const classRoutes = require('./routes/courseRoutes')
const authRoute = require("./routes/AuthRoutes");

const PORT = process.env.PORT || 4000;

<<<<<<< HEAD
=======
app.use(express.static(__dirname + "/dist"))

>>>>>>> b08850e3dc41f290082575d7b6c8228d0c77dc43
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

<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(__dirname + "/dist"))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send("Hello");
    })
}   
=======
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
>>>>>>> b08850e3dc41f290082575d7b6c8228d0c77dc43

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`);
});
