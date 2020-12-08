import React from 'react';

import '../assets/styles/components/bono.scss';
import moto from '../assets/img/Product/moto.jpg';

const Bono = ({ bono }) => {
  return (
    <section className='card'>
      <div className='card__content'>
        <p className='card__texto'>
          {bono}
          {' '}
          Titulo del bono
          {' '}
          {' '}
          descripcion del bono
          {' '}
          precio del bono
        </p>
        <img className='card__img' src={moto} alt='Imagen Producto' />
      </div>
    </section>
  );
};

export default Bono;
