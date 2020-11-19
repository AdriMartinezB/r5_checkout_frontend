import React from 'react';
import { Link } from 'react-router-dom';

import IngresaTuPlaca from '../components/IngresaTuPlaca';

import '../assets/styles/pages/soat.scss';

const Slider = () => {
  return (
    <div className='Soat'>
      <h1>Tu SOAT al instante</h1>
      <p className='Soat--descuento'>
        Con descuento hasta de $75.000 y descubre más Beneficios
        {' '}
        <Link to='beneficios'>AQUÍ</Link>
      </p>
      <IngresaTuPlaca />
      <p className='Soat--terminos'>
        Al continuar aceptas nuestros Términos y Condiciones & Política de Privacidad para el tratamiento de tus datos.
      </p>
    </div>
  );
};

export default Slider;
