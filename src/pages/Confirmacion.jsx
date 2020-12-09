/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import PagoExitoso from '../components/PagoExitoso';
import '../assets/styles/pages/confirmacion.scss';

const Confirmacion = () => {
  return (
    <section className='confirmacion'>
      <div className='confirmacion__contenido'>
        <h1 className='confirmacion-title'>Confirmación</h1>
        <PagoExitoso />
        <Link to='/'>
          <button className='conf-inicio'>Volver al Inicio</button>
        </Link>
      </div>
    </section>
  );

};

export default Confirmacion;
