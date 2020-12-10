import React from 'react';
import '../assets/styles/components/footer.scss';
import { Link } from 'react-router-dom';
import logoFooter from '../assets/img/logofooter.png';

const Footer = () => (
  <footer className='footer'>
    <Link to='/'>
      <img className='footer__img' src={logoFooter} alt='Logo Grupo R5 footer' />
    </Link>

    <div className='footer__productos_container'>
      <div className='footer__productos'>
        <h4>Productos</h4>
        <p>
          Comprar SOAT
          <br />
          Credito en linea
          <br />
          Seguro 4 huellitas
          <br />
          Seguro motocicleta
        </p>
      </div>
      <div className='footer__legal'>
        <h4>Legal</h4>
        <p>
          Terminos y condiciones
          <br />
          Politica de privacidad
          <br />
          Politica de cobranza
        </p>
      </div>
      <div className='footer__contacto'>
        <h4>Siguenos en:</h4>
        <p>
          Facebook
          <br />
          Twitter
          <br />
          Instagram
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
