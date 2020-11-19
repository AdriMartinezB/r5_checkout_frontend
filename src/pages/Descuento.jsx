import React from 'react';

import '../assets/styles/pages/descuento.scss';
import Beneficios from '../components/Beneficios';
import CajaDescuento from '../components/CajaDescuento';
import ValorTotal from '../components/ValorTotal';

const Descuento = () => {
  return (
    <div className='descuento'>
      <CajaDescuento />
      <ValorTotal />
      <Beneficios />
    </div>
  );

};

export default Descuento;
