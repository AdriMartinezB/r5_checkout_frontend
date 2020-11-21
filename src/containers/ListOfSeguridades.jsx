import React from 'react';
import SeguridadesComponent from '../components/SeguridadesComponent';

import '../assets/styles/containers/listOfSeguridades.scss';

import primer from '../assets/img/Pago seguro/1erIcono.png';
import segundo from '../assets/img/Pago seguro/2doIcono.png';
import tercero from '../assets/img/Pago seguro/3erIcono.png';

const ListOfSeguridades = () => {
  return (
    <ul className='Safe-List'>
      <li>
        <SeguridadesComponent
          localizacion={primer}
          nombre='primer'
          descripcion='MercadoPago es la pasarela más grande del continente.'
        />
      </li>
      <li>
        <SeguridadesComponent
          localizacion={segundo}
          nombre='segundo'
          descripcion='Tus datos están completamente seguros.'
        />
      </li>
      <li>
        <SeguridadesComponent
          localizacion={tercero}
          nombre='tercero'
          descripcion='Usamos encripción 128-bit'
        />
      </li>
    </ul>
  );
};

export default ListOfSeguridades;
