import React from 'react';
import '../assets/styles/components/beneficiosComponent.scss';

const Beneficios2 = ({ localizacion, nombre, descripcion }) => (
  <section className='beneficiosComponent2'>
    <div className='beneficiosComponent2__container'>
      <div className='beneficiosComponent--img2'>
        <img src={localizacion} alt={nombre} />
      </div>
      <div className='beneficiosComponent--descripcion2'>
        <p>{descripcion}</p>
      </div>
    </div>
  </section>

);

export default Beneficios2;
