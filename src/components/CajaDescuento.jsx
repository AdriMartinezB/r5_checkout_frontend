import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/cajaDescuento.scss';

const CajaDescuento = ({ data }) => {
  return (
    <section className='Descuento'>
      <h2>TU DESCUENTO ES DE:</h2>
      <p>
        $
        {' '}
        {data.Discount}
      </p>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log('valorDescuento', state);
  return {
    data: state.dataUser[0],
  };
};

export default connect(mapStateToProps, null)(CajaDescuento);
