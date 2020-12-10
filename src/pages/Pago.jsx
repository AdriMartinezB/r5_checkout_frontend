import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../assets/styles/pages/pago.scss';
import Resumen from '../components/Resumen';
import TusDatos from '../components/TusDatos';
import ListOfProducts from '../containers/ListOfProducts';
import ButtonComponent from '../components/ButtonComponent';
import useCookie from '../hooks/useCookie';

const Pago = ({ data }) => {
  const [error, setError] = React.useState(false);
  const [product, setProduct] = React.useState([]);
  const [cesta, setCesta] = React.useState('');
  const [soat, setSoat] = React.useState('');
  const [user, setUser] = React.useState('');

  console.log('esta jhair data', data);

  const Soat = (data, soat, setSoat) => {
    if (data.id === undefined && soat === '') {
      return setSoat(useCookie(data).data);
    } if (soat === '') {
      return setSoat(data);
    }
  };
  const Cesta = (data, cesta, setCesta) => {
    if (data.id === undefined && cesta === '') {
      return setCesta(useCookie(data).dataCesta);
    } if (cesta === '') {
      return setCesta(data);
    }
  };
  const User = (data, user, setUser) => {
    if (data.id === undefined && user === '') {
      return setUser(useCookie(data).dataUser);
    } if (user === '') {
      return setUser(data);
    }
  };

  Soat(data, soat, setSoat);
  Cesta(data, cesta, setCesta);
  User(data, user, setUser);

  console.log('soat jhair', soat.OwnerLastNames);
  console.log('cesta jhair', cesta);
  console.log('user jhair', user);

  const newProducts = [
    { id: 1, product: cesta.ProductName1, discount: cesta.Discount1, price: cesta.Price1 },
    { id: 2, product: cesta.ProductName2 || '', discount: cesta.Discount2 || 0, price: cesta.Price2 || 0 },
    { id: 3, product: cesta.ProductName3 || '', discount: cesta.Discount3 || 0, price: cesta.Price3 || 0 },
    { id: 4, product: cesta.ProductName4 || '', discount: cesta.Discount4 || 0, price: cesta.Price4 || 0 },
  ];

  if (cesta.message !== 'Ok' && error === false) {
    console.log('data undefined');
    setError(true);
  } else {
    newProducts;
    if (product.length === 0) {
      console.log(newProducts);
      setProduct(newProducts);
      setError(false);
    }
  }
  return (
    <section className='pago-container'>
      <div className='pago'>
        <h1 className='pago-title'>Pago</h1>
        <TusDatos
          nombre={soat.OwnerNames}
          apellido={soat.OwnerLastNames}
          correo={user.Email}
          telefono={user.PhoneNumber}
        />
        <ButtonComponent location='/TarjetaMetodo/' name='Elige tu forma de pago' color='naranja' />
        <div className='containerList'>
          {
            error ? <h1>Cesta vacia</h1> :
              product.map((data) => {
                if (data.product === '') {
                  return false;
                }
                return (
                  <ListOfProducts
                    isCesta={false}
                    key={data.id}
                    product={data.product}
                    price={data.price - data.discount}
                  />
                );
              })
          }
        </div>
        <Resumen products={newProducts} cesta={cesta} />

        <ButtonComponent location='/confirmacion/' name='PAGAR' color='naranja' />

      </div>
    </section>
  );

};

const mapStateToProps = (state) => {
  console.log('datoscesta', state);
  return {
    data: document.cookie || state.data[0],
  };
};

export default withRouter(connect(mapStateToProps, null)(Pago));
