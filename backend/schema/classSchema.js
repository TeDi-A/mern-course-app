const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ClassSchema = new Schema({
    day_name: String,
    subjects: [String],
})

module.exports = mongoose.model('Class', ClassSchema)