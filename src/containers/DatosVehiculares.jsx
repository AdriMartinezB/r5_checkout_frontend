import React from 'react';

import '../assets/styles/containers/datosVehiculares.scss';
import TusDatos from '../components/TusDatos';
import TuVehiculo from '../components/TuVehiculo';

const DatosVehiculares = () => {
  return (
    <div className='Vehi--Container'>
      <TusDatos />
      <TuVehiculo />
    </div>
  );
};

export default DatosVehiculares;
