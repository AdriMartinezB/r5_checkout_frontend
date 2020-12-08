import React from 'react';

import '../assets/styles/components/bono.scss';
import moto from '../assets/img/Product/moto.jpg';

const Bono = ({ image, description, name, price }) => {
  return (
    <section className='card'>
      <div className='card__content'>
        <p className='card__texto'>
          {name}
          {' '}
          {description}
          {' '}
          <span>
            $
            {price}
          </span>
        </p>
        <img className='card__img' src={moto} alt='Imagen Producto' />
      </div>
    </section>
  );
};

export default Bono;
