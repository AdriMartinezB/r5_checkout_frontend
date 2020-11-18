import React from 'react';
import '../assets/styles/components/producto.scss';

const Producto = () => (
  <section className='product-section'>
    <div className='product-header'>
      <input type='checkbox' name='checkbox' id='1' />
      <h2>Producto</h2>
      <button><img src='' alt='' /></button>
    </div>

    <div className='product-main'>
      <img src='' alt='' />

      <div className='product-main_info'>
        <p>Soat placa BLMN </p>
        <p>COP $455.400</p>
        <p>Seguro valido por un año</p>

        <p>Subtotal</p>
        <p>$455.400</p>
      </div>

      <button>Agregar bono de descuento</button>
    </div>

    <div className='product-footer'>
      <p>Total $455.400</p>
    </div>

  </section>

);

export default Producto;
