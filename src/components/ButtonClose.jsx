import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/buttonClose.scss';

const ButtonClose = ({ location }) => {
  return (
    <Link to={location} id='close' className='close'><span className='close--span'>&times;</span></Link>
  );
};

export default ButtonClose;
