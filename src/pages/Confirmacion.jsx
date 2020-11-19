import React from 'react';
import { Link } from 'react-router-dom';

import PagoExitoso from '../components/PagoExitoso';
import '../assets/styles/pages/confirmacion.scss';

const Confirmacion = () => {
  return (
    <section className='confirmacion'>
      <h1 className='confirmacion-title'>Confirmación</h1>
      <PagoExitoso />
      <Link to='/'>
        <button className='conf-inicio'>Volver al Inicio</button>
      </Link>
    </section>
  );

};

export default Confirmacion;
