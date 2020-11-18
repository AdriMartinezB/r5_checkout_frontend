/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/ups.scss';

const Ups = () => (
  <section className='ups'>
    <div className='ups__titulo'>
      <h2>¡Upss!</h2>
      <a href='#' id='close' className='close'><span>&times;</span></a>
    </div>
    <div className='ups__contenedor'>
      <img className='ups__contenedor--img' src='../assets/img/calendar.png' alt='calendario' />
      <p>Aún falta mucho para el vencimiento de tu SOAT actual. Si quieres te enviamos un recordatorio cuando seal el momento ideal para adquirirlo. :)</p>
      <div className='ups__contenedor--form'>
        <h3>Déjanos tus datos</h3>
        <form method='post' action='./php/login.php' name='inicioSesion' onSubmit='return validar ();'>
          <input name='nombre' className='input' type='text' placeholder='Nombre' />
          <input name='celular' className='input' type='text' placeholder='Celular' />
          <input name='correo' className='input' type='text' placeholder='Correo' />
          <button type='button' onClick=''>Enviar</button>
        </form>
      </div>
    </div>
  </section>
);

export default Ups;
