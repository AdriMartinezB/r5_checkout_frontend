import React from 'react';

import '../assets/styles/pages/descuento.scss';
import Beneficios from '../components/Beneficios';
import CajaDescuento from '../components/CajaDescuento';
import ValorTotal from '../components/ValorTotal';

const Descuento = () => {
  return (
    <section className='descuento'>
      <div className='descuento-group'>
        <CajaDescuento />
        <ValorTotal />
        <Beneficios />
      </div>
    </section>

  );

};

export default Descuento;
