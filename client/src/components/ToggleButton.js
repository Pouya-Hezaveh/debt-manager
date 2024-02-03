import React, { useState } from 'react';
import '../index.css';
import logo_selected from './accepted.svg';
import logo_deselected from './tick.svg';

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button onClick={handleButtonClick}>
      {isActive ?
        <img src={logo_selected} className="small-icon" alt="selected logo" /> :
        <img src={logo_deselected} className="small-icon" alt="deselected logo" />
      }
    </button>
  );
}

export default ToggleButton