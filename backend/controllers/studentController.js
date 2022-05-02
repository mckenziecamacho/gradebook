//require the Express module
const express = require('express');
//instantiate a router -- this will hold ass the logic
//for the URLs & mothods for this resource
const router = express.Router();
//import the student model
const Student = require('../models/Student');

//add routes to the router object
//index: GET all the students
router.get('/', (req, res, next) =>{
    //1. get all of the students from the db
    Student.find({})
    //2. send them back to the client as Json
    .then((Students) => res.json(Students))
    //3. if theres an error pass it on!
    .catch(next)
});

module.exports = router;