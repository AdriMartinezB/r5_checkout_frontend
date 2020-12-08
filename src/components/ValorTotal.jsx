import React from 'react';

import '../assets/styles/components/valorTotal.scss';
import ButtonComponent from './ButtonComponent';

const ValorTotal = ({ valorSoat }) => {
  return (
    <section className='valor'>
      <div className='valor-title'>
        <p>Valor total de tu SOAT</p>
      </div>

      <div className='valor-precio'>
        <h1>
          $
          {valorSoat}
        </h1>
      </div>

      <ButtonComponent location='/gancho' color='naranja' name='Agregar a la cesta' />

    </section>
  );
};

export default ValorTotal;
