import React from 'react';

import '../assets/styles/pages/descuento.scss';
import CajaDescuento from '../components/CajaDescuento';
import ValorTotal from '../components/ValorTotal';
import ListOfBeneficios from '../containers/ListOfBeneficios';

const Descuento = () => {
  return (
    <>
      <section className='descuento'>
        <div className='descuento__contenedor'>
          <CajaDescuento />
          <div className='descuento__contenedor--grupo2'>
            <div className='item1'>
              <ValorTotal />
            </div>
            <div className='item2'>
              <ListOfBeneficios />
            </div>
          </div>
        </div>
      </section>
    </>

  );

};

export default Descuento;
