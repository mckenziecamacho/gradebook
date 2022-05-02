// db/connection.js
//=============================================================================
// Mongo Atlas Connection
//=============================================================================
require('dotenv').config();
//require .env set up for configuration method
const mongoose = require('mongoose');
//using mongoose to set up odm 
// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
//database url located in .env file making sure we have our connection
const db = mongoose.connection;
//setting up database as mongoose.connection we do this w connect method


// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));



// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration and can be exported to other files
module.exports = mongoose