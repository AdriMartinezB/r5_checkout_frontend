import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDataCarkMarket } from '../actions';

import '../assets/styles/components/valorTotal.scss';
import Gancho from '../pages/Gancho';

const ValorTotal = (props) => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    const newData = {
      Email: props.data.Email,
      PhoneNumber: props.data.PhoneNumber,
      RegistrationNumber: props.data.RegistrationNumber,
      ProductName1: props.data.ProductName,
      Price1: props.data.PriceTotal,
    };
    props.setDataCarkMarket(newData, props);
  };

  return (
    loading ? (
      <section className='valor'>
        <h1>Loading...</h1>
      </section>
    ) : (
      <section className='valor'>
        <div className='valor-title'>
          <p>Valor total de tu SOAT</p>
        </div>

        <div className='valor-precio'>
          <h1>
            $
            {' '}
            {props.data.PriceDiscount}
          </h1>
        </div>
        <button className='naranja' onClick={handleClick}>Agregar a la Cesta</button>
      </section>
    )
  );
};

const mapStateToProps = (state) => {
  console.log('valorTotal', state);
  return {
    data: state.dataUser[0],
  };
};
const mapDispatchToProps = {
  setDataCarkMarket,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ValorTotal));
