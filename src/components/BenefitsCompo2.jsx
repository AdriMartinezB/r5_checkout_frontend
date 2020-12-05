import React from 'react';
import '../assets/styles/components/benefitsCompo.scss';

const BenefitsCompo2 = ({ localizacion, nombre, descripcion }) => (
  <section className='benefitscompo2'>
    <div className='benefitscompo2__container'>
      <div className='benefitscompo--img2'>
        <img src={localizacion} alt={nombre} />
      </div>
      <div className='benefitscompo--descripcion2'>
        <p>{descripcion}</p>
      </div>
    </div>
  </section>
);

export default BenefitsCompo2;
