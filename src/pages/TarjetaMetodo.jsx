import React from 'react';

import '../assets/styles/pages/tarjetaMetodo.scss';
import TipoTarjetas from '../components/TipoTarjetas';

const TarjetaMetodo = () => {
  return (
    <section className='tarjetametodo'>
      <div className='tarjetametodo__contenido'>
        <TipoTarjetas />
      </div>
    </section>
  );

};

export default TarjetaMetodo;
