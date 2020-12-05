/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import '../assets/styles/pages/tarjetaMetodo.scss';
import Pse from '../components/Pse';
import TarjetaCredito from '../components/TarjetaCredito';

const TarjetaMetodo = () => {
  return (
    <section className='tarjetametodo'>
      <div className='tarjetametodo-content'>
        <div className='tarjetametodo__header'>
          <h3>Selecciona tu método de pago</h3>
        </div>
        <div className='tarjetametodo__contenido'>
          <div className='tarjetametodo__contenido--debito'>
            <label htmlFor='debito'>Tarjeta Debito</label>
            <input type='checkbox' name='debito' id='debito' />
            <div className='mostrardebito'>
              <Pse />
            </div>
          </div>
          <div className='tarjetametodo__contenido--credito'>
            <label htmlFor='credito'>Tarjeta credito</label>
            <input type='checkbox' name='credito' id='credito' />
            <div className='mostrarcredito'>
              <TarjetaCredito />
            </div>
          </div>
        </div>
      </div>
    </section>

  /*<section className='tarjetametodo'>
      <div className='tarjetametodo__contenido'>
        <TipoTarjetas />
      </div>
  </section>*/
  );

};

export default TarjetaMetodo;
