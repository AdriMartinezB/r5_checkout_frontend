/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/components/header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import bell from '../assets/img/Header/notifications.png';
import carrito from '../assets/img/Header/carrito1.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={logo} alt='Logo Grupo R5' />
    </Link>
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
      <div className='header__menu--noticifaciones'>
        <img src={bell} alt='notificaciones' />
        <Link to='/cesta'>
          <img src={carrito} alt='carrito' />
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
