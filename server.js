const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const PORT = process.env.PORT || 3000;
const connectDB = require("./server/config/database.js") 

// // Import your calendar routes
// const calendarRoutes = require('./routes/calendar');

// // Setup routes for which the server is listening
// app.use("/calendar", calendarRoutes);

//Connect To Database
connectDB();

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
    res.send('Hello from Express!');
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});