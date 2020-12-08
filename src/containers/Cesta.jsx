import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../assets/styles/containers/cesta.scss';
import PasoPaso1 from '../assets/img/pasoPaso1.png'
import ButtonComponent from '../components/ButtonComponent';
import MetodoDePago from '../components/MetodoDePago';

import PagoSeguro from './PagoSeguro';
import ListOfProducts from './ListOfProducts';

const Cesta = ({ data }) => {
  const [product, setProduct] = React.useState([]);
  if (data.message !== 'Ok') {
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

  }
  return (
    product.length === 0 ? <div className='cesta'><h1>Loading...</h1></div> : (
      <div className='cesta'>
        <img className = 'PasoPaso1' src={PasoPaso1} alt="Paso cesta"/>
        <h1 className='cesta-title'>Tu Cesta</h1>

        <div className = 'contenedor-cesta'>
          <div className = 'contenedor-cesta-1' >
            <div className = 'cesta-listProducts' >
              {
                product.map((data) => {
                    if (data.product === '') {
                      return false;
                    }
                  return <ListOfProducts key={data.id} product={data.product} discount={data.discount} price={data.price} />;
                })
              }
            </div>
            <div className = 'cesta-listProducts' >
              <PagoSeguro />
              <MetodoDePago />
            </div>
          </div>
          <div className = 'contenedor-cesta-2' >
            <div className = 'botonCesta' >
              <ButtonComponent location='/pago' color='naranja' name='COMPRAR' />
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
    data: state.dataCesta[0],
  };
};

export default withRouter(connect(mapStateToProps, null)(Cesta));