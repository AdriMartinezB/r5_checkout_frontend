/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import PagoExitoso from '../components/PagoExitoso';
import '../assets/styles/pages/confirmacion.scss';

const Confirmacion = () => {
  const [del, setDel] = React.useState(true);
  if (document.cookie) {
    window.location.reload(true);
    sessionStorage.clear();
    const deleteAllCookies = () => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const spcook = cookies[i].split('=');
        document.cookie = `${spcook[0]}=;expires=Thu, 21 Sep 1979 00:00:01 UTC;`;
      }
      setDel(false);
    };
    if (del) {
      deleteAllCookies();
    }
  }

  return (
    <section className='confirmacion'>
      <div className='confirmacion__contenido'>
        <h1 className='confirmacion-title'>Confirmación</h1>
        <PagoExitoso />
        <Link to='/'>
          <button className='conf-inicio'>Volver al Inicio</button>
        </Link>
      </div>
    </section>
  );

};

export default Confirmacion;
