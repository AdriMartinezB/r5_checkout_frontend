import React from 'react';

import '../assets/styles/containers/datosVehiculares.scss';
import TusDatos from '../components/TusDatos';
import TuVehiculo from '../components/TuVehiculo';

const DatosVehiculares = () => {
  return (
    <div className='Vehi--Container'>
      <TusDatos nombre='Pedro' apellido='Sanchez' placa='VGD242' />
      <TuVehiculo marca='Mazda' modelo='adadd' linea='nose' />
    </div>
  );
};

export default DatosVehiculares;
