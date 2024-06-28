const express = require('express')
const Course = require('../schema/courseSchema')
const courseRouter = express.Router()


courseRouter.post('/create', async (req, res) => {
    const { course_id, course_name, course_description } = req.body;

    const newCourse = new Course({
        course_id,
        course_name,
        course_description
    });

    try {
        const course = await Course.create({ course_id, course_name, course_description });
        res.status(201).json({ message: 'Course saved successfully', course: newCourse });
    } catch (error) {
        res.status(500).json({ message: 'Error saving course', error: error.message });
        console.error('Error saving class:', error);
    }
})

courseRouter.post('/classes', async (req, res) => {
    try {
        const courses = req.body; // Expecting an array of class objects

        const newCourses = await Course.insertMany(courses);
        res.status(201).json({ message: 'Classes saved successfully', courses: newCourses });
    } catch (error) {
        res.status(500).json({ message: 'Error saving classes', error: error.message });
    }
});

courseRouter.get('/all', async (req, res) => {
    try {
        const courses = await Course.find({}).sort({ createdAt: -1 });
        res.status(200).json(courses);
        console.log(courses)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
})

module.exports = courseRouter