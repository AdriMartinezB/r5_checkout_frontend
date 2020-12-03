import React from 'react';
import ButtonComponent from './ButtonComponent';
import '../assets/styles/components/descubrir.scss';
import TerminosYCondiciones from './TerminosYCondiciones';

const Descubrir = () => {
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [enable, setEnable] = React.useState(true);
  const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const regexPhone = /^[0-9]{10}$/;

  const emailChangeSubmit = (e) => {
    setEmail(e.target.value);
    const isCorrect = regexEmail.test(e.target.value);
    if (isCorrect && regexPhone.test(phone)) {
      setEnable(false);
      const phoneAndEmail = { email: e.target.value, phone };
      sessionStorage.setItem('phoneAndEmail', JSON.stringify(phoneAndEmail));
    } else {
      setEnable(true);
      sessionStorage.removeItem('phoneAndEmail');
    }
  };
  const phoneChangeSubmit = (e) => {
    setPhone(e.target.value);
    const isCorrect = regexPhone.test(e.target.value);
    if (isCorrect && regexEmail.test(email)) {
      setEnable(false);
      const phoneAndEmail = { email, phone: e.target.value };
      sessionStorage.setItem('phoneAndEmail', JSON.stringify(phoneAndEmail));
    } else {
      setEnable(true);
      sessionStorage.removeItem('phoneAndEmail');
    }
  };

  return (
    <section className='descubrir__contenedor--form'>
      <p>Por favor ingresa los siguientes datos para calcular tu descuento. La veracidad de tus datos impacta en el valor de tu descuento.</p>
      <form>
        <input name='celular' className='input' type='number' placeholder='Celular' onChange={phoneChangeSubmit} />
        <input name='correo' className='input' type='email' placeholder='Correo' onChange={emailChangeSubmit} />
        <ButtonComponent location='/descuento' color='naranja' name='Descubrir Descuento' enable={enable} />
      </form>

      <TerminosYCondiciones />
    </section>
  );
};

export default Descubrir;
