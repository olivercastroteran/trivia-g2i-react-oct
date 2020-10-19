import React from 'react';
import './Button.scss';

const Button = ({ type, click, question }) => {
  return (
    <button
      className={type === 'True' ? 'booleanBtn true' : 'booleanBtn false'}
      onClick={(e) => click({ type, question })}
    >
      {type}
    </button>
  );
};

export default Button;
