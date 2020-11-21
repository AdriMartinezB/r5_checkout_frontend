import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/terminosYCondiciones.scss';

const TerminosYCondiciones = () => {
  return (
    <p className='terminos'>
      Al continuar aceptas nuestros
      <Link to='/'>Términos y condiciones</Link>
      {' '}
      &
      {' '}
      <Link to='/'>Política de Privacidad </Link>
      {' '}
      para el tratamiento de tus datos.
    </p>
  );
};

export default TerminosYCondiciones;
