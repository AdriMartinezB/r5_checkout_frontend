/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/popUpBeneficio.scss';

import ButtonComponent from '../components/ButtonComponent';
import ListOfBeneficios from './ListOfBeneficios';

const PopUpBeneficio = () => (
  <section className='popUpBeneficios'>
    <Link to='/ingresaPlaca' id='close' className='close'><span className='close--span'>&times;</span></Link>
    <h1 className='close--title'>Beneficios</h1>

    <ListOfBeneficios />

    <ButtonComponent location='/ingresaPlaca' color='naranja' name='Continuar' />

  </section>
);

export default PopUpBeneficio;
