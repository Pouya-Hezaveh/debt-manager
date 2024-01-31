import React from 'react';
import './Button.css';

function Button({ style, onClick, children }) {
  return (
    <button style={style} className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button