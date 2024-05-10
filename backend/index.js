const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const subjects = require('./subjects/subjects')
const Class = require('./schema/ClassSchema')
const classRoutes = require('./routes/classRoutes')

const PORT = process.env.PORT || 4000;

app.use(express.static(__dirname + "/dist"))
app.get('/', (req, res) => {
    res.send("Hello");
})

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

app.use('/api', classRoutes)

Class.insertMany(subjects)
    .then(() => {
        console.log('Subjects data inserted successfully.');
    })
    .catch(error => {
        console.error('Error inserting subjects data:', error);
    });

const atlasConnectionUri = process.env.MONGODB_URL;
mongoose.connect(atlasConnectionUri, {
    dbName: 'subjects'
});

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`);
});
