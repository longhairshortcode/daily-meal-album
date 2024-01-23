const express = require("express");
const router = express.Router();
const calendarController = require("../controllers/calendar");

// Define a GET route for your calendar
router.get("/", calendarController.getCalendar);  // Assuming getCalendar is the function in your controller

module.exports = router;