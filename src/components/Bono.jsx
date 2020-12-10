import React from 'react';

import '../assets/styles/components/bono.scss';

const Bono = ({ image, description, name, price }) => {
  return (
    <section className='card'>
      <div className='card__content'>
        <p className='card__texto'>
          <span className='spannombre'>
            {name}
          </span>
          <br />
          {' '}
          {description}
          {' '}
          <br />
          <span className='spanprecio'>
            $
            {new Intl.NumberFormat('de-DE').format(price)}
          </span>
        </p>
        <img className='card__img' src={image} alt='Imagen Producto' />
      </div>
    </section>
  );
};

export default Bono;
