import React from 'react';

import '../assets/styles/components/tusDatos.scss';

const TusDatos = () => {
  return (
    <section className='Datos'>
      <h1 className='Datos-title'>Métodos de Pago</h1>
      <div className='Datos-info-container'>
        <div className='Datos-info'>
          <h2>Nombre:</h2>
          <p>Edwin Fernando</p>
        </div>
        <div className='Datos-info'>
          <h2>Apellido:</h2>
          <p>Alarcon Caro</p>
        </div>
        <div className='Datos-info'>
          <h2>Correo:</h2>
          <p>edwinfac@gmail.com</p>
        </div>
        <div className='Datos-info'>
          <h2>Telefono:</h2>
          <p>321 456 7890</p>
        </div>
      </div>

    </section>
  );
};

export default TusDatos;
