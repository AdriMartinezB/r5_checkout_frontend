import React from 'react';

import '../assets/styles/components/tuVehiculo.scss';

const TuVehiculo = ({ marca, modelo, linea }) => {
  return (
    <section className='Vehiculo'>
      <h1 className='Vehiculo-title'>Tu Vehículo</h1>
      <div className='Vehiculo-info-container'>
        <div className='Vehiculo-info'>
          <h2>Marca:</h2>
          <p>{marca}</p>
        </div>
        <div className='Vehiculo-info'>
          <h2>Modelo:</h2>
          <p>{modelo}</p>
        </div>
        <div className='Vehiculo-info'>
          <h2>Linea:</h2>
          <p>{linea}</p>
        </div>
      </div>

    </section>
  );
};

export default TuVehiculo;
