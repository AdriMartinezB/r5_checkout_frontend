/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDataRequest } from '../actions';

import '../assets/styles/containers/cesta.scss';
import PasoPaso1 from '../assets/img/pasoPaso1.png';
import cesta from '../assets/img/cesta_vacia.png'
import ButtonComponent from '../components/ButtonComponent';
import MetodoDePago from '../components/MetodoDePago';

import PagoSeguro from './PagoSeguro';
import ListOfProducts from './ListOfProducts';

const Cesta = (props) => {
  const [error, setError] = React.useState(false);
  const [product, setProduct] = React.useState([]);
  const [datos, setDatos] = React.useState('');
  const [enable, setEnable] = React.useState(true);

  if (props.data.id === undefined && datos === '') {
    const dataJSON1 = props.data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    setDatos(newData.dataCesta);
  } else if (datos === '') {
    setDatos(props.data);
  }

  const newProducts = [
    { id: 1, product: datos.ProductName1, discount: datos.Discount1, price: datos.Price1 },
    { id: 2, product: datos.ProductName2 || '', discount: datos.Discount2 || 0, price: datos.Price2 || 0 },
    { id: 3, product: datos.ProductName3 || '', discount: datos.Discount3 || 0, price: datos.Price3 || 0 },
    { id: 4, product: datos.ProductName4 || '', discount: datos.Discount4 || 0, price: datos.Price4 || 0 },
  ];

  const handlePay = (Total) => {
    if (Total === 0) {
      return 'COMPRAR';
    }
    return (`COMPRAR   $${Total}`);

  };
  const ButtonDescription = handlePay(new Intl.NumberFormat('de-DE').format(datos.Total));

  if (datos.message !== 'Ok' && error === false) {
    console.log('data undefined');
    setError(true);
    setEnable(true);
  } else {
    newProducts;
    if (product.length === 0) {
      console.log(newProducts);
      setProduct(newProducts);
      setError(false);
      setEnable(false);
    }
  }

  return (
    product.length === 0 ? (<div className='cesta'><h1>Loading...</h1></div>) : (
      <div className='cesta'>
        <img className='PasoPaso1' src={PasoPaso1} alt='Paso cesta' />
        <h1 className='cesta-title'>Tu Cesta</h1>

        <div className='contenedor-cesta'>
          <div className='contenedor-cesta-1'>
            <div className='cesta-listProducts'>
              <h1 className='cesta-title'>Tus productos</h1>
              {
                error ? <img className = 'cesta_img-carga' src={cesta} alt="cesta"/> :
                  product.map((data) => {
                    if (data.product === '') {
                      return false;
                    }
                    return (
                      <ListOfProducts
                        isCesta={true}
                        key={data.id}
                        product={data.product}
                        discount={data.discount}
                        price={data.price}
                        Email={datos.Email}
                        PhoneNumber={datos.PhoneNumber}
                        info={props.history}
                      />
                    );
                  })
              }
            </div>
            <div className='cesta-metodos'>
              <PagoSeguro />
              <MetodoDePago />
              <div className='botonCesta'>
                <ButtonComponent disabled={enable} location='/pago' color='naranja' name={ButtonDescription} />
              </div>
            </div>
            
          </div>
        </div>

      </div>
    )
  );
};

const mapStateToProps = (state) => {
  console.log('datoscesta', state);
  return {
    data: document.cookie || state.dataCesta[0],
  };
};
const mapDispatchToProps = {
  getDataRequest,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cesta));
