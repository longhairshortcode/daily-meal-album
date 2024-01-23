import React from 'react';
import DaySquare from './DaySquare';

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  return new Date(year, month, 1).getDay();
}

function Calendar({ year, month }) {
  const totalDays = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfWeek(year, month);
  const daysArray = Array.from({ length: totalDays }, (_, index) => index + 1);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar">
      <div className="weekdays">
        {weekdays.map((weekday, index) => (
          <div key={index} className="weekday">
            {weekday}
          </div>
        ))}
      </div>
      <div className="days">
        {Array.from({ length: firstDayOfWeek }, (_, index) => (
          <div key={`empty-${index}`} className="empty-day" />
        ))}
        {daysArray.map((day, index) => (
          <DaySquare key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default Calendar;