import React from 'react';
import './Button.css';

function Button({ color, onClick, children }) {
  return (
    <button style={{ backgroundColor: color }} className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button