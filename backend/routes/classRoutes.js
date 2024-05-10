const express = require('express')
const Class = require('../schema/ClassSchema')
const classRouter = express.Router()

classRouter.get('/all', async (req, res) => {
    const classes = await Class.find({}).sort({ createdAt: -1 })
    res.status(200).json(classes)
})

classRouter.post('/all', async (req, res) => {
    const classes = new Class(req.body);
    await newClass.save();
    res.json(newClass);
})

module.exports = classRouter