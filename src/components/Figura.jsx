import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/figura.scss';

const Figura = ({ data }) => {
  const [datos, setDatos] = React.useState('');
  if (data.id === undefined && datos === '') {
    const dataJSON1 = data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    setDatos(newData.data);
  } else if (datos === '') {
    setDatos(data);
  }

  return (
    <div className='precio-figura'>
      <div className='figura'>
        <p>PRECIO ANTES DEL DESCUENTO</p>
        <p className='valordelproducto'>
          $
          {' '}
          {datos.PriceSoat}
        </p>
        <p>Precio establecido por ley*</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: document.cookie || state.data[0],
  };
};

export default connect(mapStateToProps, null)(Figura);
