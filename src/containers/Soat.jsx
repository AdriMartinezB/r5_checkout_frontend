import React from 'react';
import { Link } from 'react-router-dom';

import IngresaTuPlaca from '../components/IngresaTuPlaca';

import '../assets/styles/containers/soat.scss';

const Soat = () => {
  return (
    <section className='Soat'>
      <div className='Soat--descuento'>
        <h1>Tu SOAT al instante</h1>
        <p>
          Con descuento hasta de $75.000 y descubre más Beneficios
          {' '}
          <Link to='/popUpBeneficio/'>AQUÍ!</Link>
        </p>
      </div>

      <IngresaTuPlaca />

      <div className='Soat--terminos'>
        <p>
          Al continuar aceptas nuestros Términos y Condiciones & Política de Privacidad para el tratamiento de tus datos.
        </p>
      </div>

    </section>
  );
};

export default Soat;
