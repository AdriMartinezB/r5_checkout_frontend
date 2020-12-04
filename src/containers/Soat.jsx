import React from 'react';

import IngresaTuPlaca from '../components/IngresaTuPlaca';

import '../assets/styles/containers/soat.scss';
import TerminosYCondiciones from '../components/TerminosYCondiciones';
import PopUpBeneficio from './PopUpBeneficio';

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
          <a href='#modal' id='show-modal' className='boton_aqui'>Aquí</a>
        </p>
      </div>

      <IngresaTuPlaca />

      <TerminosYCondiciones />

      <aside id='modal' className='modal'>
        <div className='content-modal'>
          <PopUpBeneficio />
        </div>
      </aside>

    </section>
  );
};

export default Soat;
