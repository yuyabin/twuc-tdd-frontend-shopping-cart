import React from 'react';
import './index.css';


const button = (props) => {
  return (
    <button
      className={`button ${props.disabled ? 'disabled' : ''}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default button;
