const express = require('express')
const Class = require('../schema/ClassSchema')
const classRouter = express.Router()

classRouter.get('/all', async (req, res) => {
    try {
        const classes = await Class.find({}).sort({ createdAt: -1 });
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch classes' });
    }
})

module.exports = classRouter