import React from 'react';

import '../assets/styles/pages/cesta.scss';
import ButtomComponent from '../components/ButtomComponent';
import MetodoDePago from '../components/MetodoDePago';

import PagoSeguro from '../components/PagoSeguro';
import ListOfProducts from '../containers/ListOfProducts';

const Cesta = () => {
  return (
    <div className='cesta'>
      <h1 className='cesta-title'>Tu Cesta</h1>
      <ListOfProducts />
      <ButtomComponent location='/pago' color='naranja' name='COMPRAR' />
      <PagoSeguro />
      <MetodoDePago />
    </div>
  );

};

export default Cesta;
