import React from 'react';

import Figura from '../components/Figura';
import Descubrir from '../components/Descubrir';

import '../assets/styles/pages/cotizacion.scss';
import DatosVehiculares from '../containers/DatosVehiculares';

const Cotizacion = () => {
  return (
    <section className='cotizacion'>
      <div className='cotizacion__contenedor'>
        <Figura />
        <div className='cotizacion__contenedor--grupo2'>
          <Descubrir />
          <DatosVehiculares />
        </div>
      </div>
    </section>
  );

};

export default Cotizacion;
