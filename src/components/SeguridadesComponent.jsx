import React from 'react';
import '../assets/styles/components/seguridadesComponent.scss';

const SeguridadesComponent = ({ localizacion, nombre, descripcion }) => (
  <section className='seguridadesComponent'>
    <div className='seguridadesComponent--img'>
      <img src={localizacion} alt={nombre} />
    </div>
    <div className='seguridadesComponent--descripcion'>
      <p>{descripcion}</p>
    </div>
  </section>
);

export default SeguridadesComponent;
