import React from 'react';

import { Link } from 'react-router-dom';
import IngresaTuPlaca from '../components/IngresaTuPlaca';

import '../assets/styles/containers/soat.scss';
import TerminosYCondiciones from '../components/TerminosYCondiciones';

const Soat = () => {
  return (
    <section className='Soat'>
      <div className='Soat--descuento'>
        <h1>SOAT al instante</h1>
        <p className='soat__texto'>
          Con descuento hasta de $75.000 y descubre más Beneficios
          {' '}
          {' '}
          <br />
          <Link to='/popUpBeneficio/'>AQUÍ!</Link>
        </p>
      </div>

      <IngresaTuPlaca />

      <TerminosYCondiciones />

    </section>
  );
};

export default Soat;
