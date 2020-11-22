import React from 'react';

import '../assets/styles/components/tusDatos.scss';

const TusDatos = ({ nombre, apellido, correo, telefono }) => {
  return (
    <section className='Datos'>
      <h1 className='Datos-title'>Tus Datos</h1>
      <div className='Datos-info-container'>
        <div className='Datos-info'>
          <h2>Nombre:</h2>
          <p>{nombre}</p>
        </div>
        <div className='Datos-info'>
          <h2>Apellido:</h2>
          <p>{apellido}</p>
        </div>
        <div className='Datos-info'>
          <h2>Correo:</h2>
          <p>{correo}</p>
        </div>
        <div className='Datos-info'>
          <h2>Telefono:</h2>
          <p>{telefono}</p>
        </div>
      </div>

    </section>
  );
};

export default TusDatos;
