//creates a functional component named NavBar that after destructuring takes in the onMonthChange prop from App.js which is the 
//handleMonthChange function also defined in App.js

//also creates a month array with all the month names that will be the names of the buttons when mapped
//in the return section

// Defines the handleMonthClick function, which triggers onMonthChange with the clicked month's index 

// Renders a div with buttons for each month, using the map function on the 'months' array
// Each button has a key prop with the index, an onClick prop triggering handleMonthClick,
// and a className prop generating a class based on the lowercase name of the month followed by "-button"

function NavBar({ onMonthChange }) {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handleMonthClick = (index) => {
    if (onMonthChange) {
      onMonthChange(index);
    }
  };

  // creates a div with each month's button with the props key, onClick, and className using the map function 
  return (
    <div className="nav-bar">
      {months.map((month, index) => (
        <button key={index} onClick={() => handleMonthClick(index)} className={`${months[index].toLowerCase()}-button`}>
          {month}
        </button>
      ))}
    </div>
  );
}

export default NavBar;