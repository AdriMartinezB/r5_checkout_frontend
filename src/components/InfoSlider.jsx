import React from 'react';

import '../assets/styles/components/infoSlider.scss';

import cellphone from '../assets/img/Home/celphone.png';

const InfoSlider = () => {
  return (
    <div className='infoSlider-container'>
      <div className='infoSlider'>
        <h2>8.154.545.454</h2>
        <p>En descuentos entregados</p>
      </div>
      <div className='infoSlider'>
        <h2>250.000</h2>
        <p>SOAT emitidos</p>
      </div>
      <div className='infoSlider'>
        <h2>24 Horas</h2>
        <p>Disponibles para ti</p>
      </div>
      <img src={cellphone} alt='celular' />
    </div>

  );
};

export default InfoSlider;
