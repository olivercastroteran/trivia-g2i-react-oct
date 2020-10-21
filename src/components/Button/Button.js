import React from 'react';
import './Button.scss';

const Button = ({ type, click, question }) => {
  return (
    <button
      className={type === 'True' ? 'booleanBtn true' : 'booleanBtn false'}
      onClick={(e) => click({ type, question })}
      data-test={type === 'True' ? 'booleanBtn true' : 'booleanBtn false'}
    >
      {type}
    </button>
  );
};

export default Button;
