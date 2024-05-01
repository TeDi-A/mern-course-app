const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()

app.use(cors(
    {
        origin: ["https://mern-project2-tedi-a-tedi-as-projects.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(express.json())

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://tediadjene:raiden74739@cluster-0.ecjyzgn.mongodb.net/test?retryWrites=true&w=majority')

app.get("/", (req, res) => {
    res.json("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})