import React from 'react';

import '../assets/styles/containers/listOfBeneficios.scss';
import BeneficiosComponent from '../components/BeneficiosComponent';

import calendar from '../assets/img/Beneficios/calendar.png';
import cornerShop from '../assets/img/Beneficios/cornerShop.png';
import dafiti from '../assets/img/Beneficios/dafiti.png';
import phone from '../assets/img/Beneficios/phone.png';

const ListOfBeneficios = () => {
  return (
    <ul className='listOfBeneficios'>
      <li>
        <BeneficiosComponent
          localizacion={dafiti}
          nombre='dafity'
          descripcion='20% de descuento en moda Dafiti.com.co Válido hasta el 30 de noviembre o agotar existencias. Condiciones aquí.'
        />
      </li>
      <li>
        <BeneficiosComponent
          localizacion={cornerShop}
          nombre='cornerShop'
          descripcion='Bono de $40.000 para hacer mercado con Cornershop.Solo aplica para clientes que compraron su anterior SOAT con Grupo R5.Válido hasta el 30 de noviembre o agotar existencias. Condiciones aquí.'
        />
      </li>
      <li>
        <BeneficiosComponent
          localizacion={calendar}
          nombre='calendario'
          descripcion='Iniciará vigencia el día después de su vencimiento'
        />
      </li>
      <li>
        <BeneficiosComponent
          localizacion={phone}
          nombre='Telefono'
          descripcion='Entrega inmediata por correo y SMS'
        />
      </li>
    </ul>
  );
};

export default ListOfBeneficios;
