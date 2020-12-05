import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/figura.scss';

const Figura = ({ data }) => (
  <div className='precio-figura'>
    <div className='figura'>
      <p>PRECIO ANTES DEL DESCUENTO</p>
      <p>
        <b>
          $
          {' '}
          {data}
        </b>
      </p>
      <p>Precio establecido por ley*</p>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    data: state.data[0].PriceSoat,
  };
};

export default connect(mapStateToProps, null)(Figura);
