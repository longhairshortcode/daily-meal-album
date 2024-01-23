import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Calendar from './components/Calendar';

function App() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Default to the current month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to the current year

  const handleMonthChange = (newMonth) => {
    setSelectedMonth(newMonth);
  };

  return (
    <div className="App">
      <h1 className="title">Daily Meal Album</h1>
      <NavBar onMonthChange={handleMonthChange} />
      <Calendar year={selectedYear} month={selectedMonth} />
    </div>
  );
}

export default App;
