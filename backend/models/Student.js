// models/Student.js
// require the mongoose package from the connection pool
const mongoose = require('../db/connection');
//how we pull our addition methods like schemas

// make a new schema with 2 properties, and assign it to a variable
const StudentSchema = new mongoose.Schema({
	name: String,
	course: String,
    GPA: String,
});

// instantiate the model, calling it "Student" and with the schema we just made
const Student = mongoose.model('Student', StudentSchema);

// export the newly created model as Student
module.exports = Student;