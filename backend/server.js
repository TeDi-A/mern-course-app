const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()


app.use(express.json())


const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 4000;

mongoose.connect


app.get("/", (req, res) => {
    res.json("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})