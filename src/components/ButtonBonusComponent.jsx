/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/buttonBonusComponent.scss';

const ButtonComponent = ({ location, name, color }) => {
  return (
    <Link className='link' to={location}>
      (<button className={color}>{name}</button>)
    </Link>
  );

};

export default ButtonComponent;
