import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/cajaDescuento.scss';

const CajaDescuento = ({ data }) => {
  const [datos, setDatos] = React.useState('');
  if (data.id === undefined && datos === '') {
    const dataJSON1 = data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    setDatos(newData.dataUser);
  } else if (datos === '') {
    setDatos(data);
  }

  return (
    <section className='Descuento'>
      <h2>TU DESCUENTO ES DE:</h2>
      <p>
        $
        {' '}
        {new Intl.NumberFormat('de-DE').format(datos.Discount)}
      </p>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    data: document.cookie || state.dataUser[0],
  };
};

export default connect(mapStateToProps, null)(CajaDescuento);
