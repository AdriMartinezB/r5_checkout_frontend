import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDataCarkMarket } from '../actions';

import '../assets/styles/components/valorTotal.scss';
import ButtonComponent from './ButtonComponent';

const ValorTotal = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [datos, setDatos] = React.useState('');
  if (props.data.id === undefined && datos === '') {
    const dataJSON1 = props.data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    setDatos(newData.dataUser);
  } else if (datos === '') {
    setDatos(props.data);
  }

  const handleClick = () => {
    setLoading(true);
    const newData = {
      Email: datos.Email,
      PhoneNumber: datos.PhoneNumber,
      RegistrationNumber: datos.RegistrationNumber,
      ProductName1: datos.ProductName,
      Price1: datos.PriceTotal,
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
            {datos.PriceDiscount}
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
    data: document.cookie || state.dataUser[0],
  };
};
const mapDispatchToProps = {
  setDataCarkMarket,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ValorTotal));
