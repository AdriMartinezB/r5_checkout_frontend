import React from 'react';
import PagoSeguro from '../components/PagoSeguro';
import ListOfProducts from '../containers/ListOfProducts';

const Cesta = () => {
  return (
    <>
      <ListOfProducts />
      <PagoSeguro />
    </>
  );

};

export default Cesta;
