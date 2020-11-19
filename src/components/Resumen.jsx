import React from 'react';

import '../assets/styles/components/resumen.scss';

const Resumen = () => {
  return (
    <section className='Resumen'>

      <h1 className='Resumen-title'>RESUMEN DE PEDIDO</h1>

      <div className='Resumen-info-container'>
        <div className='Resumen-info'>
          <h2>SOAT placa BLM074</h2>
          <p>455.400</p>
        </div>
        <div className='Resumen-info'>
          <h2>Seguro Motocicleta</h2>
          <p>63.000</p>
        </div>
        <div className='Resumen-info'>
          <h2>Costo transaccional</h2>
          <p>0</p>
        </div>
      </div>

      <div className='Resumen-total'>
        <h2>TOTAL</h2>
        <p>$518.400</p>
      </div>

    </section>
  );
};

export default Resumen;
