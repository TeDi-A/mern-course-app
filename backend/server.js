const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()


app.use(express.json())

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://tediadjene:raiden74739@cluster-0.ecjyzgn.mongodb.net/test?retryWrites=true&w=majority')

app.get("/", (req, res) => {
    res.json("Hello");
    console.log("Active now")
})

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})