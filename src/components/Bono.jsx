import React from 'react';

import '../assets/styles/components/bono.scss';
//import moto from '../assets/img/Product/moto.jpg';

const Bono = ({ image, description, name, price }) => {
  return (
    <div className='card'>
      <p className='card__texto'>
        {name}
        {' '}
        {description}
      </p>
      <img className='card__img' src={image} alt='Imagen Producto' />
      <span>
        $
        {' '}
        {price}
      </span>
    </div>
  );
};

export default Bono;
