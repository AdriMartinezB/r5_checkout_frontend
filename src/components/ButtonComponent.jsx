/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/buttomComponent.scss';

const ButtonComponent = ({ location, name, color, enable, props, disabled }) => {
  return (
    <Link className='link' to={location} props={props}>
      <button className={color} disabled={disabled}>{name}</button>
    </Link>
  );
};

export default ButtonComponent;
