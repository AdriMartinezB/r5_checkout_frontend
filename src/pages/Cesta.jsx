import React from 'react';

import '../assets/styles/pages/cesta.scss';
import MetodoDePago from '../components/MetodoDePago';

import PagoSeguro from '../components/PagoSeguro';
import ListOfProducts from '../containers/ListOfProducts';

const Cesta = () => {
  return (
    <div className='cesta'>
      <h1 className='cesta-title'>Tu Cesta</h1>
      <ListOfProducts />
      <button className='comprar'>COMPRAR</button>
      <PagoSeguro />
      <MetodoDePago />
    </div>
  );

};

export default Cesta;
