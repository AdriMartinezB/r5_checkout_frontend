/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDataRequest } from '../actions';

import '../assets/styles/components/ingresaTuPlaca.scss';
import '../assets/styles/components/buttomComponent.scss';

const IngresaTuPlaca = (props) => {
  const [placa, setPlaca] = React.useState('');
  const [enable, setEnable] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const regex = /^[A-Za-z]{3}[0-9]{2}[A-Fa-f0-9]{1}$/;

  const changeSubmit = (e) => {
    setPlaca(e.target.value);
    const isCorrect = regex.test(e.target.value);
    if (isCorrect) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const placaUp = placa.toUpperCase();
    props.getDataRequest(placaUp, props);
  };

  return (
    loading ? (
      <section className='placa'>
        <h1>Loading...</h1>
      </section>
    ) :
      (
        <section className='placa'>
          <h1>Métodos de Pago</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='Placa'
              placeholder='ABC123'
              pattern='[A-Za-z]{3}[0-9]{2}[A-Fa-f0-9]{1}'
              value={placa}
              onChange={changeSubmit}
              required
            />
            <button className='naranja' disabled={enable}>Cotiza Gratis</button>
          </form>
        </section>
      )
  );
};

const mapDispatchToProps = {
  getDataRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(IngresaTuPlaca));
