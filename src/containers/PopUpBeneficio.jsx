/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/popUpBeneficio.scss';
import Beneficios from '../components/Beneficios';

const PopUpBeneficio = () => (
  <section className='popUpBeneficios'>
    <Link to='/cotizacion' id='close' className='close'><span>&times;</span></Link>

    <Beneficios />

    <div className='boton__continuar'>
      <Link to='/cotizacion'>
        <button type='button'>Continuar</button>
      </Link>
    </div>
  </section>
);

export default PopUpBeneficio;
