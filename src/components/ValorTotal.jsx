import React from 'react';
import { connect } from 'react-redux';
import ButtonComponent from './ButtonComponent';

import '../assets/styles/components/valorTotal.scss';

const ValorTotal = ({ data }) => {
  return (
    <section className='valor'>
      <div className='valor-title'>
        <p>Valor total de tu SOAT</p>
      </div>

      <div className='valor-precio'>
        <h1>
          $
          {data.PriceDiscount}
        </h1>
      </div>

      <ButtonComponent location='/gancho' color='naranja' name='Agregar a la Cesta' />

    </section>
  );
};

const mapStateToProps = (state) => {
  console.log('valorTotal', state);
  return {
    data: state.dataUser[0],
  };
};

export default connect(mapStateToProps, null)(ValorTotal);
