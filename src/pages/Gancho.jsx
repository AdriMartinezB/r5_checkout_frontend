/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/pages/gancho.scss';
import ButtonComponent from '../components/ButtonComponent';
import Bono from '../components/Bono';
import ButtonBonusComponent from '../components/ButtonBonusComponent';

const Gancho = ({ numArticulos }) => {
  return (
    <section className='gancho'>
      <div className='gancho__header'>
        <div className='gancho__header--articulos'>
          <span className='check'>&#10004;</span>
          <p>
            Se añadio un nuevo artículo. Ahora tienes
            {numArticulos}
            {' '}
            en tu cesta
          </p>
        </div>
        <div>
          <a href='#' className='close-gancho'><span>x</span></a>
        </div>
      </div>
      <div className='gancho__botones'>
        <ButtonComponent location='/cesta' color='verde' name='Ver Cesta' />
        <ButtonComponent location='/' color='verde' name='Seguir comprando' />
      </div>
      <div className='gancho__contenedor'>
        <p className='texto-gancho'>Los clientes que compraron este producto también compraron:</p>
        <div className='gancho__contenedor--grupo'>
          <div className='losbonos'>
            <Bono />
            <ButtonBonusComponent location='/' name='Ver beneficios' color='naranjab' />
          </div>
          <div className='losbonos'>
            <Bono />
            <ButtonBonusComponent location='/' name='Ver beneficios' color='naranjab' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gancho;
