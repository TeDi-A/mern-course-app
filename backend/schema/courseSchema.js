const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CourseSchema = new Schema({
    course_id: Number,
    course_name: String,
    course_description: String
});


module.exports = mongoose.model('Course', CourseSchema)