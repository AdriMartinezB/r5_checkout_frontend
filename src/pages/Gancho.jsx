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
      <div className='gancho__container'>
        <div className='gancho__container--contenido'>
          <div className='gancho__header'>
            <span className='check'>&#10004;</span>
            <p>
              Se añadio un nuevo artículo. Ahora tienes
              {numArticulos}
              {' '}
              en tu cesta
            </p>
          </div>
          <div className='gancho__botones'>
            <ButtonComponent location='/cesta' color='verde' name='Ver Cesta' />
            <ButtonComponent location='/' color='verde' name='Ver más productos' />
          </div>
          <div className='gancho__contenedor'>
            <p className='texto-gancho'>Los clientes que compraron este producto también compraron:</p>
            <div className='gancho__contenedor--grupo'>
              <div className='losbonos'>
                <Bono />
                <ButtonBonusComponent location='/' name='Añadir a la cesta' color='naranjab' />
              </div>
              <div className='losbonos'>
                <Bono />
                <ButtonBonusComponent location='/' name='Añadir a la cesta' color='naranjab' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gancho;
