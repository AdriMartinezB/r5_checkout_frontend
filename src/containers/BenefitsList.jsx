import React from 'react';
import BenefitsCompo from '../components/BenefitsCompo';
import BenefitsCompo2 from '../components/BenefitsCompo2';
import '../assets/styles/containers/benefitsList.scss';

import calendarwhite from '../assets/img/Beneficios/calendarwhite.png';
import cornerShopwhite from '../assets/img/Beneficios/cornerShopwhite.png';
import dafitiwhite from '../assets/img/Beneficios/dafitiwhite.png';
import phonewhite from '../assets/img/Beneficios/phonewhite.png';

const BenefitsList = () => {
  return (

    <ul className='BenefitsList'>
      <div className='BenefitsList__texto'>
        <h3>
          Compra y recibe
          {' '}
          <span>tu SOAT</span>
          {' '}
          <br />
          fácil y rápido
        </h3>
        <p>
          ¡Premiamos a los buenos conductores con hasta $75,000 de descuento!
        </p>
      </div>
      <li>
        <BenefitsCompo
          localizacion={dafitiwhite}
          nombre='dafity'
          descripcion='20% de descuento en moda Dafiti.com.co Válido hasta el 30 de noviembre o agotar existencias. Condiciones aquí.'
        />
      </li>
      <li>
        <BenefitsCompo
          localizacion={cornerShopwhite}
          nombre='cornerShop'
          descripcion='Bono de $40.000 para hacer mercado con Cornershop.Solo aplica para clientes que compraron su anterior SOAT con Grupo R5.Válido hasta el 30 de noviembre o agotar existencias. Condiciones aquí.'
        />
      </li>
      <li>
        <BenefitsCompo2
          localizacion={calendarwhite}
          nombre='calendario'
          descripcion='Iniciará vigencia el día después de su vencimiento'
        />
      </li>
      <li>
        <BenefitsCompo2
          localizacion={phonewhite}
          nombre='Telefono'
          descripcion='Entrega inmediata por correo y SMS'
        />
      </li>
    </ul>
  );
};

export default BenefitsList;
