/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/popbono.scss';
import ButtonClose from '../components/ButtonClose';
import Bono from '../components/Bono';
import ButtonBonusComponent from '../components/ButtonBonusComponent';

const PopBono = () => (
  <section className='popbono'>
    <div className='popbono__titulo'>
      <ButtonClose location='/cesta' />
    </div>
    <div className='popbono__contenedor'>
      <h3>Agregar popbono de Descuento</h3>
      <div className='popbono__contenedor--form'>
        <form>
          <p>Código de descuento</p>
          <input name='codigo' className='input' type='text' placeholder='Código' />
          <ButtonBonusComponent name='Confirmar' color='verdeb' />
        </form>
      </div>
      <div className='popbono__contenedor--popbonos'>
        <p>Bonos de descuento</p>
        <div className='losbonos'>
          <Bono />
          <ButtonBonusComponent name='Agregar código' color='naranjab' />
        </div>
      </div>
    </div>
  </section>
);

export default PopBono;
