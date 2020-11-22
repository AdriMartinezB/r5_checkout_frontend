/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/containers/popUpBeneficio.scss';
import ButtonClose from '../components/ButtonClose';

import ButtonComponent from '../components/ButtonComponent';
import ListOfBeneficios from './ListOfBeneficios';

const PopUpBeneficio = () => (
  <section className='popUpBeneficios'>
    <ButtonClose location='/ingresaPlaca' />

    <h1 className='close--title'>Beneficios</h1>

    <ListOfBeneficios />

    <ButtonComponent location='/ingresaPlaca' color='naranja' name='Continuar' />

  </section>
);

export default PopUpBeneficio;
