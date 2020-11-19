import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/pages/cesta.scss';
import MetodoDePago from '../components/MetodoDePago';

import PagoSeguro from '../components/PagoSeguro';
import ListOfProducts from '../containers/ListOfProducts';

const Cesta = () => {
  return (
    <div className='cesta'>
      <h1 className='cesta-title'>Tu Cesta</h1>
      <ListOfProducts />
      <Link to='/pago/'>
        <button className='comprar'>COMPRAR</button>
      </Link>
      <PagoSeguro />
      <MetodoDePago />
    </div>
  );

};

export default Cesta;
