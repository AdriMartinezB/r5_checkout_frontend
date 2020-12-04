import React from 'react';

import '../assets/styles/pages/ingresaPlaca.scss';
import Soat from '../containers/Soat';
import BenefitsList from '../containers/BenefitsList';

const IngresaPlaca = () => {
  return (
    <div className='ingresaPlaca'>
      <section className='ingresaPlaca__container'>
        <div className='ingresaPlaca__container--contenido'>
          <BenefitsList />
          <Soat />
        </div>
      </section>
    </div>
  );
};

export default IngresaPlaca;
