import React from 'react';

import '../assets/styles/pages/tuCesta.scss';
import Cesta from '../containers/Cesta';

const TuCesta = () => {
  sessionStorage.setItem('message', 'undefined');
  return (
    <div className='tuCesta'>
      <Cesta />
    </div>
  );

};

export default TuCesta;
