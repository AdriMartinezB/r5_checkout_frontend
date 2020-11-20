import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/descubrir.scss';

const Descubrir = () => (
  <section className='descubrir'>
    <div className='descubrir__contenedor--form'>
      <p>Por favor ingresa los siguientes datos para calcular tu descuento. La veracidad de tus datos impacta en el valor de tu descuento.</p>
      <form>
        <input name='celular' className='input' type='text' placeholder='Celular' />
        <input name='correo' className='input' type='text' placeholder='Correo' />
        <Link to='/descuento'>
          <button type='button'>Descubrir Descuento</button>
        </Link>
      </form>
      <p className='letra-menuda'>
        Al continuar aceptas nuestros
        <Link to='/'>
          <p>Términos y condiciones</p>
        </Link>
        {' '}
        &
        {' '}
        <Link to='/'>
          <p>Política de Privacidad</p>
        </Link>
        {' '}
        para el tratamiento de tus datos.
      </p>
    </div>
  </section>
);

export default Descubrir;
