import React from 'react';
import Figura from '../components/Figura';
import Descubrir from '../components/Descubrir';

import '../assets/styles/pages/cotizacion.scss';
import DatosVehiculares from '../containers/DatosVehiculares';

const Cotizacion = () => {
  return (
    <section className='cotizacion-container'>
      <div className='cotizacion-group'>
        <Figura />
        <Descubrir />
        <DatosVehiculares />
      </div>
    </section>
  );

};

export default Cotizacion;
