import React from 'react';

import '../assets/styles/containers/cesta.scss';
import ButtonComponent from '../components/ButtonComponent';
import MetodoDePago from '../components/MetodoDePago';

import PagoSeguro from './PagoSeguro';
import ListOfProducts from './ListOfProducts';

const Cesta = () => {
  return (
    <div className='cesta'>
      <h1 className='cesta-title'>Tu Cesta</h1>
      <ListOfProducts />
      <ButtonComponent location='/pago' color='naranja' name='COMPRAR' />
      <PagoSeguro />
      <MetodoDePago />
    </div>
  );

};

export default Cesta;
