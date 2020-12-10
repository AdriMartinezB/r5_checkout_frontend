import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../assets/styles/pages/pago.scss';
import Resumen from '../components/Resumen';
import TusDatos from '../components/TusDatos';
import ListOfProducts from '../containers/ListOfProducts';
import ButtonComponent from '../components/ButtonComponent';
import useCookie from '../hooks/useCookie';

import paso2 from '../assets/img/pasoPaso2.png';

const Pago = ({ data }) => {
  const [error, setError] = React.useState(false);
  const [product, setProduct] = React.useState([]);
  const [cesta, setCesta] = React.useState('');
  const [soat, setSoat] = React.useState('');
  const [user, setUser] = React.useState('');
  const [enable, setEnable] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const auth = sessionStorage.getItem('message');

  if (auth !== 'acessOk' && count === 0) {
    setEnable(false);
    setCount(1);
  } else if (auth === 'acessOk' && count === 0) {
    setEnable(true);
    setCount(1);
  }

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

  const newProducts = [
    { id: 1, product: cesta.ProductName1 || '', discount: cesta.Discount1 || 0, price: cesta.Price1 || 0 },
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
      setProduct(newProducts);
      setError(false);
    }
  }
  return (
    <section className='pago-container'>
      <div className='pago'>
        <img className='paso2' src={paso2} alt='Paso 2 pago' />
        <h1 className='pago-title'>Pago</h1>
<<<<<<< HEAD
        <div className = 'container-total'>
            <div className = 'container1'>
              <div className='containerList'>
              <h1 className='cesta-title'>Tus productos</h1>
=======
        <div className='container-total'>
          <div className='container1'>
            <div className='containerList'>
>>>>>>> 153d349c0eafb825032872fd7d177a459fd6556a
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
          </div>
          <div className='container2'>
            <h1 className='Datos-title_'> Tus Datos </h1>
            <TusDatos
              className='datos'
              nombre={soat.OwnerNames}
              apellido={soat.OwnerLastNames}
              correo={user.Email}
              telefono={user.PhoneNumber}
            />
<<<<<<< HEAD
            <ButtonComponent location='/TarjetaMetodo/' name='Elige tu forma de pago' color='verde' />
            
            <Resumen products={newProducts} cesta={cesta} />

            <div className = 'botonPagar'>
              <ButtonComponent location='/confirmacion/' name='PAGAR' color='naranja' />
            </div>
=======
            <ButtonComponent location='/TarjetaMetodo/' name='Elige tu forma de pago' color='naranja' disabled={enable} />

            <Resumen products={newProducts} cesta={cesta} />

>>>>>>> 153d349c0eafb825032872fd7d177a459fd6556a
          </div>

        </div>
<<<<<<< HEAD
        
=======
        <div className='botonPagar'>
          <ButtonComponent location='/confirmacion/' name='PAGAR' color='naranja' disabled={!enable} />
        </div>
>>>>>>> 153d349c0eafb825032872fd7d177a459fd6556a
      </div>
    </section>
  );

};

const mapStateToProps = (state) => {
  return {
    data: document.cookie || state.data[0],
    auth: state.autentication[0],
  };
};

export default withRouter(connect(mapStateToProps, null)(Pago));
