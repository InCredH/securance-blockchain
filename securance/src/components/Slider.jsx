import React, { useState } from 'react';
import '../css/Slider.css';

function Slider(props) {
  const [value, setValue] = useState(10000); // Default value of slider is 50

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    props.onSliderChange(newValue);
  }

  return (
    <div className="slider-container">
      <input 
        type="range" 
        min="10000" 
        max="100000" 
        step="15000"
        value={value} 
        className="slider" 
        onChange={handleChange} 
      />
      <div className="slider-value">{value}</div>
    </div>
  );
}

export default Slider;
