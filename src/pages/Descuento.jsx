import React from 'react';

import '../assets/styles/pages/descuento.scss';
import CajaDescuento from '../components/CajaDescuento';
import ValorTotal from '../components/ValorTotal';
import ListOfBeneficios from '../containers/ListOfBeneficios';

const Descuento = () => {
  return (
    <section className='descuento'>
      <div className='descuento-group'>
        <CajaDescuento />
        <ValorTotal />
        <ListOfBeneficios />
      </div>
    </section>

  );

};

export default Descuento;
