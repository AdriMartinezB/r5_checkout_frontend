import React from 'react';
import Figura from '../components/Figura';
import Descubrir from '../components/Descubrir';
import Vehiculo from '../components/Vehiculo';

import '../assets/styles/pages/cotizacion.scss';

const Cotizacion = () => {
  return (
    <section className='cotizacion-container'>
      <div className='cotizacion-group'>
        <Figura />
        <Descubrir />
        <Vehiculo />
      </div>
    </section>
  );

};

export default Cotizacion;
