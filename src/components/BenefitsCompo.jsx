import React from 'react';
import '../assets/styles/components/benefitsCompo.scss';

const BenefitsCompo = ({ localizacion, nombre, descripcion }) => (
  <section className='benefitscompo'>
    <div className='benefitscompo--img'>
      <img src={localizacion} alt={nombre} />
    </div>
    <div className='benefitscompo--descripcion'>
      <p>{descripcion}</p>
    </div>
  </section>
);

export default BenefitsCompo;
