import React from 'react';
import './Button.css';

function Button({ backColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: backColor }} className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button