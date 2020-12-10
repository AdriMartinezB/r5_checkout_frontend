/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../assets/styles/components/tarjetacredito.scss';
import { getConfirmacionTrajeta } from '../actions';

const TrajetaCredito = (props) => {
  const [datos, setDatos] = React.useState({ });

  const inputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getConfirmacionTrajeta(datos, props);
  };
  return (
    <section className='tarjetacredito'>
      <div className='tarjetacredito__titulo'>
        <h2>Tarjeta de Credito</h2>
      </div>
      <div className='tarjetacredito__contenedor'>
        <div className='tarjetacredito__contenedor--form'>
          <form onSubmit={handleSubmit}>
            <h3>Añade tus datos</h3>
            <p className='texto-credito'>Costo transaccional de $20.500</p>
            <input name='CardNumber' className='input' type='number' placeholder='N° de tarjeta' onChange={inputChange} required />
            <input name='ExpirationDate' className='input' type='date' placeholder='MM/AA' onChange={inputChange} required />
            <input name='Cvv' className='input' type='number' placeholder='Código de seguridad' onChange={inputChange} pattern='[0-9]{3}' required />
            <input name='OwnerName' className='input' type='text' placeholder='Nombre' onChange={inputChange} required />
            <input name='DocumentNumber' className='input' type='number' placeholder='identificacion' onChange={inputChange} required />
            <div className='pagoseguro'>
              <img src='https://img.icons8.com/metro/26/000000/lock-2.png' alt='seguro' />
              <p>Pago 100% seguro</p>
            </div>
            <button className='naranja'>Confirmar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  getConfirmacionTrajeta,
};
export default withRouter(connect(null, mapDispatchToProps)(TrajetaCredito));
