const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use(express.static('dist'))

app.get("/api/message", (req, res) => {
    res.send([{
        id: 1,
        name: "user1"
    }, {
        id: 2,
        name: "user2"
    }, {
        id: 3,
        name: "user3"
    }]);
});

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`);
});
