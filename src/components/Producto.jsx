/* eslint-disable radix */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import '../assets/styles/components/producto.scss';
import { connect } from 'react-redux';
import { getDataCesta, updateDataCesta } from '../actions';
import trash from '../assets/img/Product/trash.png';

const Producto = (props) => {
  const [image, setImage] = React.useState('');
  const { isCesta, product, discount, price } = props.data;
  const priceTotal = parseInt(price - discount);
  const emAndPh = {
    data: {
      Email: props.data.Email,
      PhoneNumber: props.data.PhoneNumber,
    },
    history: props.data.info,
  };
  if (image === '') {
    switch (props.data.product) {
      case 'Seguro Moto':
        return setImage('https://i.imgur.com/3Mt4t9Z.jpg');
      case 'Seguro Automovil':
        return setImage('https://i.imgur.com/RKpKdir.png');
      case 'Seguro 4 Huellitas':
        return setImage('https://i.imgur.com/LeI4RK2.jpg');
      default:
        return setImage('https://i.imgur.com/dIumlIh.jpg');
    }
  }
  const handleDelete = () => {
    if (props.data.product === 'Seguro Moto' || props.data.product === 'Seguro Automovil') {
      const upData2 = {
        ProductName2: '',
        Discount2: 0,
        Price2: 0,
      };
      props.updateDataCesta(upData2, emAndPh);
      props.getDataCesta(emAndPh);
    } else if (props.data.product === 'Seguro 4 Huellitas') {
      const upData3 = {
        ProductName3: '',
        Discount3: 0,
        Price3: 0,
      };
      props.updateDataCesta(upData3, emAndPh);
    }
  };

  return (
    <section className='product-section'>

      <div className='product-header'>
        <h2>
          {product}
        </h2>
        {isCesta && props.data.product !== 'SOAT' ? (
          <button className='TrashButton-button' onClick={handleDelete}><img src={trash} alt='trash' /></button>
        ) : (<div />)}
      </div>

      <div className='product-main'>
        <img src={image} alt='image product' />

        <div className='product-main_info'>
          <p>
            {product}
            {' '}
          </p>
          <p>
            COP $
            {' '}
            {new Intl.NumberFormat('de-DE').format(price)}
          </p>
          {isCesta ? (
            <div>
              <p>Seguro valido por un año</p>
              <div className='product-main_info_subtotal'>
                <p className='subtotal-title'>Descuento</p>
                <p className='subtotal-price'>
                  $
                  {' '}
                  {new Intl.NumberFormat('de-DE').format(discount)}
                </p>
              </div>

            </div>
          ) : (<div />)}
        </div>

      </div>

      {isCesta ? (
        <div className='product-footer'>
          <p>
            Total $
            {' '}
            {new Intl.NumberFormat('de-DE').format(priceTotal)}
          </p>
        </div>
      ) : (<div />) }

    </section>

  );
};

const mapDispatchToProps = {
  updateDataCesta,
  getDataCesta,
};

export default connect(null, mapDispatchToProps)(Producto);
