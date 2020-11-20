import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/buttomComponent.scss';

const ButtomComponent = ({ location, name, color }) => {
  return (
    <Link className='link' to={location}>
      <button className={color}>{name}</button>
    </Link>
  );

};

export default ButtomComponent;
