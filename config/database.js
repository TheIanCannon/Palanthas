const mongoose = require('mongoose');


mongoose.connect(
    // database connection string
    process.env.DATABASE_URL
);


// shortcut variable
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});