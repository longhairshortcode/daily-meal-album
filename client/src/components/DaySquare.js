import React, { useState } from 'react';

function DaySquare({ day }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="day-square">
      <span>{day}</span>
      <label className="file-label">
        Add Meal Pic
        <input type="file" onChange={handleImageChange} />
      </label>
      {image && (
        <div className="image-container">
          {image && <img src={image} alt={`Day ${day}`} style={{ width: '100%', height: '100%' }} />}
        </div>
      )}
    </div>
  );
}

export default DaySquare;
