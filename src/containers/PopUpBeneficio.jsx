/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/popUpBeneficio.scss';
import Beneficios from '../components/Beneficios';
import ButtomComponent from '../components/ButtomComponent';

const PopUpBeneficio = () => (
  <section className='popUpBeneficios'>
    <Link to='/ingresaPlaca' id='close' className='close'><span>&times;</span></Link>

    <Beneficios />

    <div className='boton__continuar'>
      <ButtomComponent location='/ingresaPlaca' color='naranja' name='Continuar' />
    </div>
  </section>
);

export default PopUpBeneficio;