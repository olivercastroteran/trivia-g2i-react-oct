import React from 'react';
import './Button.scss';

const Button = ({ type }) => {
  return (
    <button
      className={type === 'True' ? 'booleanBtn true' : 'booleanBtn false'}
    >
      {type}
    </button>
  );
};

export default Button;
