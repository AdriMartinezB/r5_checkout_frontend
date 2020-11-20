/* eslint-disable react/jsx-no-undef */
import React from 'react';
import '../assets/styles/components/beneficios.scss';

import calendar from '../assets/img/Beneficios/calendar.png';
import cornerShop from '../assets/img/Beneficios/cornerShop.png';
import dafity from '../assets/img/Beneficios/dafity.png';
import phone from '../assets/img/Beneficios/phone.png';

const Beneficios = () => (
  <section className='beneficios'>

    <div className='beneficios__titulo'>
      <h2>Beneficios</h2>
    </div>

    <div className='beneficios__contenedor'>
      <div className='beneficios__contenedor--grupo '>
        <div className='beneficio '>
          <img className='beneficio__img' src={dafity} alt='dafity' />
          <p>
            20% de descuento en moda Dafiti.com.co Válido hasta el 30 de noviembre o agotar existencias. Terminos y condiciones
            {' '}
            <Link to='/'>
              <p><span>Aquí</span></p>
            </Link>
          </p>
        </div>
        <div className='beneficio '>
          <img className='beneficio__img' src={cornerShop} alt='cornerShop' />
          <p>
            Bono de $40.000 para hacer mercado en cornershop. Aplica para clientes que compraron su anterior SOAT con Grupo R5 Válido hasta el 30 de noviembre o agotar existencias. Terminos y condiciones
            {' '}
            <Link to='/'>
              <p><span>Aquí</span></p>
            </Link>
          </p>
        </div>
        <div className='beneficio'>
          <img className='beneficio__img' src={calendar} alt='calendario' />
          <p>
            Iniciará vigencia el día después de su vencimiento.
          </p>
        </div>
        <div className='beneficio'>
          <img className='beneficio__img' src={phone} alt='celular' />
          <p>
            Entrega inmediata por correo y SMS.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Beneficios;
