import React from 'react';
import BenefitsCompo from '../components/BenefitsCompo';
import '../assets/styles/containers/benefitsList.scss';

import calendar from '../assets/img/Beneficios/calendar.png';
import cornerShop from '../assets/img/Beneficios/cornerShop.png';
import dafity from '../assets/img/Beneficios/dafity.png';
import phone from '../assets/img/Beneficios/phone.png';

const BenefitsList = () => {
  return (
    <ul className='BenefitsList'>
      <li>
        <BenefitsCompo
          localizacion={dafity}
          nombre='dafity'
          descripcion='20% de descuento en moda Dafiti.com.co Válido hasta el 30 de noviembre o agotar existencias. Condiciones aquí.'
        />
      </li>
      <li>
        <BenefitsCompo
          localizacion={cornerShop}
          nombre='cornerShop'
          descripcion='Bono de $40.000 para hacer mercado con Cornershop.Solo aplica para clientes que compraron su anterior SOAT con Grupo R5.Válido hasta el 30 de noviembre o agotar existencias. Condiciones aquí.'
        />
      </li>
      <li>
        <BenefitsCompo
          localizacion={calendar}
          nombre='calendario'
          descripcion='Iniciará vigencia el día después de su vencimiento'
        />
      </li>
      <li>
        <BenefitsCompo
          localizacion={phone}
          nombre='Telefono'
          descripcion='Entrega inmediata por correo y SMS'
        />
      </li>
    </ul>
  );
};

export default BenefitsList;
