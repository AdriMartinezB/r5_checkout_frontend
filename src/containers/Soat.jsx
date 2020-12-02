import React from 'react';

import IngresaTuPlaca from '../components/IngresaTuPlaca';

import '../assets/styles/containers/soat.scss';
import TerminosYCondiciones from '../components/TerminosYCondiciones';

const Soat = () => {
  return (
    <section className='Soat'>
      <div className='Soat--descuento'>
        <h1>Tu SOAT al instante</h1>
        <p>
          Con descuento hasta de $75.000 y descubre más Beneficios
          {' '}
          {/* <Link to='/popUpBeneficio/'>AQUÍ!</Link> */}
        </p>
      </div>

      <IngresaTuPlaca />

      <TerminosYCondiciones />

    </section>
  );
};

export default Soat;
