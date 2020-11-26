/* eslint-disable react/button-has-type */
import React from 'react';

import '../assets/styles/components/ingresaTuPlaca.scss';
import ButtonComponent from './ButtonComponent';
import '../assets/styles/components/buttomComponent.scss';

const IngresaTuPlaca = () => {
  const [placa, setPlaca] = React.useState('');
  const [enable, setEnable] = React.useState(true);
  const regex = /^[A-Za-z]{3}[0-9]{2}[A-Fa-f0-9]{1}$/;

  const changeSubmit = (e) => {
    setPlaca(e.target.value);
    const isCorrect = regex.test(e.target.value);
    if (isCorrect) {
      const placaUp = e.target.value.toUpperCase();
      setEnable(false);
      sessionStorage.setItem('placa', placaUp);
    } else {
      setEnable(true);
      sessionStorage.removeItem('placa');
    }
  };

  return (
    <section className='placa'>
      <h1>Métodos de Pago</h1>
      <input
        type='text'
        name='Placa'
        placeholder='ABC123'
        pattern='[A-Za-z]{3}[0-9]{2}[A-Fa-f0-9]{1}'
        value={placa}
        onChange={changeSubmit}
        required
      />
      <ButtonComponent location='/cotizacion' color='naranja' name='Cotiza Gratis' enable={enable} props={placa} />
    </section>
  );
};

export default IngresaTuPlaca;
