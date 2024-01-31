import React from 'react';
import Button from './Button';
import delete_logo from './trash-bin.svg';

function DeleteButton({ onClick }) {
    return (
      <Button style={{ transform: 'scale(0.6)', backgroundColor: '#d2506e'}} onClick={onClick}>
        <img src={delete_logo} className='logout-logo' alt="unavailable" />
      </Button>
    );
  }

export default DeleteButton