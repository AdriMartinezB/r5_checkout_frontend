import React from 'react';
import '../assets/styles/components/producto.scss';
//import moto from '../assets/img/moto.jpg';
//import trash from '../assets/img/trash.svg';

const Producto = () => (
  <section className='product-section'>
    <div className='product-header'>
      <h2>
        <input type='checkbox' name='checkbox' id='1' />
        Producto
      </h2>
      <button><img src='' alt='trash' /></button>
    </div>

    <div className='product-main'>
      <img src='' alt='trash' />

      <div className='product-main_info'>
        <p>Soat placa BLMN </p>
        <p>COP $455.400</p>
        <p>Seguro valido por un año</p>
        <div className='product-main_info_subtotal'>
          <p>Subtotal</p>
          <p>$455.400</p>
        </div>
        <button>Agregar bono de descuento</button>
      </div>

    </div>

    <div className='product-footer'>
      <p>Total $455.400</p>
    </div>

  </section>

);

export default Producto;
