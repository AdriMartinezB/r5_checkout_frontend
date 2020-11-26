import React from 'react';

import '../assets/styles/components/bono.scss';
import moto from '../assets/img/Product/moto.jpg';

const Bono = ({ bono }) => {
  return (
    <div className='card'>
      <p className='card__texto'>
        {bono}
        {' '}
        Titulo del bono
      </p>
      <img className='card__img' src={moto} alt='Imagen Producto' />
    </div>
  );
};

export default Bono;
