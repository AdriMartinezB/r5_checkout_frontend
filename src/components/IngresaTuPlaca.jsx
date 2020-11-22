/* eslint-disable react/button-has-type */
import React from 'react';

import '../assets/styles/components/ingresaTuPlaca.scss';
import ButtonComponent from './ButtonComponent';
import '../assets/styles/components/buttomComponent.scss';

const IngresaTuPlaca = () => {
  const [placa, setPlaca] = React.useState('');
  const [enable, setEnable] = React.useState(true);
  const regex = /^[A-Za-z]{3}[0-9]{2}[A-Fa-f0-9]{1}$/;
  function obtenerDataPlaca(placaUp) {
    fetch(`https://heroprodev.herokuapp.com/api/soatDetails/${placaUp}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(data),
    })
      .then( res => res.json())
      .then(data => console.log(data))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const placaUpercase = placa.toUpperCase();
    console.log(placaUpercase);
    obtenerDataPlaca(placaUpercase);
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
          onChange={(e) => {
            setPlaca(e.target.value);
            const isCorrect = regex.test(e.target.value);
            if (isCorrect) {
              setEnable(false);
            } else { setEnable(true); }
          }}
          required
        />
        {/* <button className='naranja' disabled={enable}> Cotiza Gratis </button> */}
        <ButtonComponent location='/cotizacion' color='naranja' name='Cotiza Gratis' enable={enable} props={placa}/>
    </section>
  );
};

export default IngresaTuPlaca;
