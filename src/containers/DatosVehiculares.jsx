import React from 'react';

import '../assets/styles/containers/datosVehiculares.scss';
import TusDatos from '../components/TusDatos';
import TuVehiculo from '../components/TuVehiculo';

const DatosVehiculares = () => {
  const placa = sessionStorage.getItem('placa');
  const [data, setData] = React.useState({});

  function obtenerData(placaUp) {
    fetch(`https://heroprodev.herokuapp.com/api/soatDetails/${placaUp}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  obtenerData(placa);
  return (
    <div className='Vehi--Container'>
      <TusDatos nombre={data.OwnerNames} apellido={data.OwnerLastNames} />
      <TuVehiculo marca={data.CarMake} modelo={data.RegistrationYear} linea={data.CarModel} />
    </div>
  );
};

export default DatosVehiculares;
