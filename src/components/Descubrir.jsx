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

      <TerminosYCondiciones />
    </div>
  </section>
);

export default Descubrir;
