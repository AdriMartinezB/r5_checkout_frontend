import React from 'react';

import Figura from '../components/Figura';
import Descubrir from '../components/Descubrir';
import Vehiculo from '../components/Vehiculo';

import '../assets/styles/containers/listOfProducts.scss';

const Cotizacion = () => {
  return (
    <div>
      <Figura />
      <Descubrir />
      <Vehiculo />
    </div>
  );
};

export default Cotizacion;
