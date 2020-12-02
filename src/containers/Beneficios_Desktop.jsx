/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/containers/beneficiosDesktop.scss';
import ListOfBeneficios from './ListOfBeneficios';

const BeneficioDesktop = () => (
  <section className='popUpBeneficios'>

    <h1 className='close--title'>Beneficios</h1>

    <ListOfBeneficios />

  </section>
);

export default BeneficioDesktop;