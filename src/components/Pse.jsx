import React from 'react';
import '../assets/styles/components/pse.scss';
import ButtonComponent from './ButtonComponent';

const Pse = () => {
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
    <section className='pse'>
      <div className='pse__titulo'>
        <h2>Pago PSE</h2>
      </div>
      <div className='pse__contenedor'>
        <div className='pse__contenedor--form'>
          <form onSubmit={handleSubmit}>
            <h3>Añade tus datos</h3>
            <select className='selector'>
              <option value='1'>Tipo de Documento</option>
              <option value='2'>Cedula de Ciudadania</option>
              <option value='3'>Pasaporte</option>
            </select>
            <input name='identificacion' className='input' type='text' placeholder='N° de Identificación' />
            <select className='selector'>
              <option value='1'>Selecciona tu banco</option>
              <option value='2'>Bancolombia</option>
              <option value='3'>Colpatria</option>
              <option value='3'>Davivienda</option>
              <option value='3'>Banco de Bogotá</option>
            </select>
            <div className='pagoseguro'>
              <img src='https://img.icons8.com/metro/26/000000/lock-2.png' alt='seguro' />
              <p>Pago 100% seguro</p>
            </div>
            <ButtonComponent location='/pago' color='naranja' name='Confirmar' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Pse;
