import React from 'react';
import './NotFound.scss';
import { ReactComponent as AstronautIcon } from '../../assets/images/astronaut.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <AstronautIcon />
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
