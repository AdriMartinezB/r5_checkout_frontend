import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../assets/styles/pages/pago.scss';
import Resumen from '../components/Resumen';
import TusDatos from '../components/TusDatos';
import ListOfProducts from '../containers/ListOfProducts';
import ButtonComponent from '../components/ButtonComponent';

const Pago = ({ data }) => {
  console.log('esta jhair data', data);

  const [datos, setDatos] = React.useState('');
  if (data.id === undefined && datos === '') {
    const dataJSON1 = data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    setDatos(newData);
    console.log('new data jhair', newData[0]);
  } else if (datos === '') {
    setDatos(data);
  }

  const soat = datos.data;
  const cesta = datos.dataCesta;
  const user = datos.dataUser;

  console.log('esta jhair soat', soat);
  console.log('esta jhair datos', cesta);
  console.log('esta jhair datos', user);

  /*  const [product, setProduct] = React.useState([]);
  if (datos.message !== 'Ok') {
    console.log('data undefined');
  } else {
    const newProducts = [
      { id: 1, product: data.ProductName1, discount: data.Discount1, price: data.Price1 },
      { id: 2, product: data.ProductName2 || '', discount: data.Discount2 || 0, price: data.Price2 || 0 },
      { id: 3, product: data.ProductName3 || '', discount: data.Discount3 || 0, price: data.Price3 || 0 }];
    if (product.length === 0) {
      console.log(newProducts);
      setProduct(newProducts);
    }
  } */
  return (
    <section className='pago-container'>
      <div className='pago'>
        <h1 className='pago-title'>Pago</h1>
        <TusDatos />
        <ButtonComponent location='/TarjetaMetodo/' name='Elige tu forma de pago' color='naranja' />
        <div className='containerList'>

          <ListOfProducts
            isCesta={false}
            key={data.id}
            product={data.product}
            discount={data.discount}
            price={data.price}
          />
        </div>
        <Resumen />

        <ButtonComponent location='/confirmacion/' name='PAGAR $' color='naranja' />

      </div>
    </section>
  );

};

const mapStateToProps = (state) => {
  console.log('datoscesta', state);
  return {
    data: document.cookie || state,
  };
};

export default withRouter(connect(mapStateToProps, null)(Pago));
