import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/containers/datosVehiculares.scss';
import TusDatos from '../components/TusDatos';
import TuVehiculo from '../components/TuVehiculo';

const DatosVehiculares = ({ data }) => {

  return (
    <div className='Vehi--Container'>
      <TusDatos nombre={data.OwnerNames} apellido={data.OwnerLastNames} />
      <TuVehiculo marca={data.CarMake} modelo={data.RegistrationYear} linea={data.CarModel} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('datosvehiculares', state);
  return {
    data: state.data[0],
  };
};

export default connect(mapStateToProps, null)(DatosVehiculares);
