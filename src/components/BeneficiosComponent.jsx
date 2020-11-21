import React from 'react';
import '../assets/styles/components/beneficiosComponent.scss';

const Beneficios = ({ localizacion, nombre, descripcion }) => (
  <section className='beneficiosComponent'>
    <div className='beneficiosComponent--img'>
      <img src={localizacion} alt={nombre} />
    </div>
    <div className='beneficiosComponent--descripcion'>
      <p>{descripcion}</p>
    </div>
  </section>
);

export default Beneficios;
