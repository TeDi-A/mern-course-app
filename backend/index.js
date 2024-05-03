const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()


app.use(express.json())

const PORT = process.env.PORT || 4000;

// mongoose.connect('mongodb+srv://tediadjene:raiden74739@cluster-0.ecjyzgn.mongodb.net/test?retryWrites=true&w=majority')

app.get("/", (req, res) => {
    console.log("Active now")
    res.json("Congratulations🎉!!! Backend is active & running👍");
})

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})
