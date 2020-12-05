/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/containers/popUpBeneficio.scss';
import ListOfBeneficios from './ListOfBeneficios';

const PopUpBeneficio = () => (
  <section className='popUpBeneficios'>
    <div className='popUpBeneficios__header'>
      <h1 className='close--title'>Beneficios</h1>
      <div>
        <a href='#' className='close-modal'><span>x</span></a>
      </div>
      <a href='#' className='btnclose-modal'>.</a>
    </div>

    <ListOfBeneficios />

    <a href='#' className='btnclose-modal1'><p>Continuar</p></a>

  </section>
);

export default PopUpBeneficio;
