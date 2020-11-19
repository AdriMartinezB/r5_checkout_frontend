import React from 'react';

import PagoExitoso from '../components/PagoExitoso';
import '../assets/styles/pages/confirmacion.scss';

const Confirmacion = () => {
  return (
    <section className='confirmacion'>
      <h1 className='confirmacion-title'>Confirmación</h1>
      <PagoExitoso />
      <button className='conf-inicio'>Volver al Inicio</button>
    </section>
  );

};

export default Confirmacion;
