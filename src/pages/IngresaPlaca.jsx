import React from 'react';

import '../assets/styles/pages/ingresaPlaca.scss';
import Soat from '../containers/Soat';
import Beneficios_Desktop from '../containers/Beneficios_Desktop';

const IngresaPlaca = () => {
  return (
    <div className='ingresaPlaca'>
      <div className = 'Contenedor_ingresa_placa'>
        <Beneficios_Desktop />
        <Soat />  
      </div>
    </div>
  );

};

export default IngresaPlaca;
