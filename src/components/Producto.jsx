/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import '../assets/styles/components/producto.scss';
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';

import trash from '../assets/img/Product/trash.png';

const Producto = ({ producto, imageProduct, placa, precio, subtotal, precioTotal }) => {
  return (
    <section className='product-section'>
      <div className='product-header'>
        <h2>
          <input type='checkbox' name='checkbox' id='1' />
          {producto}
        </h2>
        <Link className='TrashButton' to='/'>
          <button className='TrashButton-button' type='button'><img src={trash} alt='trash' /></button>
        </Link>
      </div>

      <div className='product-main'>
        <img src={imageProduct} alt='image product' />

        <div className='product-main_info'>
          <p>
            {producto}
            {' '}
            placa
            {' '}
            {placa}
            {' '}
          </p>
          <p>
            COP $
            {precio}
          </p>
          <p>Seguro valido por un año</p>
          <div className='product-main_info_subtotal'>
            <p className='subtotal-title'>Subtotal</p>
            <p className='subtotal-price'>
              $
              {subtotal}
            </p>
          </div>
          <ButtonComponent name='Agregar bono de descuento' color='verde' location='/popBono' />
        </div>

      </div>

      <div className='product-footer'>
        <p>
          Total $
          {precioTotal}
        </p>
      </div>

    </section>

  );
};

export default Producto;
