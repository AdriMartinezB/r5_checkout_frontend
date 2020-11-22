import React from 'react';
import ButtonComponent from './ButtonComponent';
import '../assets/styles/components/descubrir.scss';
import TerminosYCondiciones from './TerminosYCondiciones';

const Descubrir = () => (
  <section className='descubrir'>
    <div className='descubrir__contenedor--form'>
      <p>Por favor ingresa los siguientes datos para calcular tu descuento. La veracidad de tus datos impacta en el valor de tu descuento.</p>
      <form>
        <input name='celular' className='input' type='text' placeholder='Celular' />
        <input name='correo' className='input' type='text' placeholder='Correo' />
        <ButtonComponent location='/descuento' color='naranja' name='Descubrir Descuento' />
      </form>
<<<<<<< HEAD
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
=======

      <TerminosYCondiciones />
>>>>>>> 27899825960a052be731a2ba9fb88b246bb4f68c
    </div>
  </section>
);

export default Descubrir;
