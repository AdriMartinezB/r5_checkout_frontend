import React from 'react';

import '../assets/styles/pages/ingresaPlaca.scss';
import Soat from '../containers/Soat';
import Beneficios from '../containers/Beneficios_Desktop';

const IngresaPlaca = () => {
  return (
    <div className='ingresaPlaca'>
      <div className = 'Contenedor_ingresa_placa'>
        <Soat /> 
        <Beneficios />
      </div>
    </div>
  );

};

export default IngresaPlaca;
