import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/containers/datosVehiculares.scss';
import TusDatos from '../components/TusDatos';
import TuVehiculo from '../components/TuVehiculo';

const DatosVehiculares = ({ data }) => {
  const [datos, setDatos] = React.useState('');
  if (data.id === undefined && datos === '') {
    const dataJSON1 = data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    setDatos(newData.data);
  } else if (datos === '') {
    setDatos(data);
  }

  return (
    <div className='Vehi--Container'>
      <h1 className = 'Datos-title'>Tus Datos</h1>
      <TusDatos isCotizacion nombre={datos.OwnerNames} apellido={datos.OwnerLastNames} />
      <TuVehiculo marca={datos.CarMake} modelo={datos.RegistrationYear} linea={datos.CarModel} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: document.cookie || state.data[0],
  };
};

export default connect(mapStateToProps, null)(DatosVehiculares);
