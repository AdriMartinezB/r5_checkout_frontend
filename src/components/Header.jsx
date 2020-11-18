/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/components/header.scss';

const Header = () => (
  <header className='header'>
    <img className='header__img' src='../assets/img/logo.png' alt='Logo Grupo R5' />
    <div className='header__menu'>
      <div className='header__menu--hamburguesa'>
        <input id='abrir-cerrar' name='abrir-cerrar' type='checkbox' value='' />
        <label htmlFor='abrir-cerrar' className='toggle-button' />
      </div>
      <nav className='header__menu--botones'>
        <ul>
          <li><a href='/'>Productos</a></li>
          <li><a href='/'>Blog</a></li>
          <li><a href='/'>¿Preguntas?</a></li>
          <li><a href='/'>Nosotros</a></li>
        </ul>
      </nav>
      <div className='header__menu--buscador'>
        <form>
          <input type='text' placeholder='¿Qué buscas?' />
        </form>
      </div>
    </div>
  </header>
);

export default Header;
