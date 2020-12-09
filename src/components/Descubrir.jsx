import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDataUser } from '../actions';
import '../assets/styles/components/descubrir.scss';
import '../assets/styles/components/buttomComponent.scss';
import TerminosYCondiciones from './TerminosYCondiciones';

const Descubrir = (props) => {
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [enable, setEnable] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const regexPhone = /^[0-9]{10}$/;
  const [placa, setPlaca] = React.useState('');
  if (props.data.id === undefined && placa === '') {
    const dataJSON1 = props.data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    console.log(newData);
    setPlaca(newData.data.RegistrationNumber);
  } else if (placa === '') {
    setPlaca(props.data.RegistrationNumber);
  }

  const emailChangeSubmit = (e) => {
    setEmail(e.target.value);
    const isCorrect = regexEmail.test(e.target.value);
    if (isCorrect && regexPhone.test(phone)) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  };
  const phoneChangeSubmit = (e) => {
    setPhone(e.target.value);
    const isCorrect = regexPhone.test(e.target.value);
    if (isCorrect && regexEmail.test(email)) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    props.getDataUser(email, phone, placa, props);
  };

  return (
    loading ? (
      <section className='descubrir__contenedor--form'>
        <h6 className='loading'>Loading...</h6>
      </section>
    ) :
      (
        <section className='descubrir__contenedor--form'>
          <p>Por favor ingresa los siguientes datos para calcular tu descuento. La veracidad de tus datos impacta en el valor de tu descuento.</p>
          <form onSubmit={handleSubmit}>
            <input name='celular' className='input' type='number' placeholder='Celular' onChange={phoneChangeSubmit} />
            <input name='correo' className='input' type='email' placeholder='Correo' onChange={emailChangeSubmit} />
            <button className='naranja' disabled={enable}>Descubrir Descuento</button>
          </form>

          <TerminosYCondiciones />
        </section>
      )
  );
};

const mapStateToProps = (state) => {
  console.log('descubrir', state);
  return {
    data: document.cookie || state.data[0],
  };
};

const mapDispatchToProps = {
  getDataUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Descubrir));
