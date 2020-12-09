/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/pages/gancho.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDataCesta } from '../actions';

import ButtonComponent from '../components/ButtonComponent';
import Bono from '../components/Bono';

const Gancho = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [services, setServices] = React.useState([]);
  const getServices = () => {
    fetch('https://heroprodev.herokuapp.com/api/services', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  if (services.length === 0) {
    getServices();
  };
  const handleClick = () => {
    setLoading(true);
    props.getDataCesta(props);
  };

  const handleAdd = () => {
    console.log('add');
  };

  return (
    loading ? <section className='gancho'><h1>Loading...</h1></section> : (
      <section className='gancho'>
        <div className='gancho__header'>
          <div className='gancho__header--articulos'>
            <span className='check'>&#10004;</span>
            <p>
              Se añadio un nuevo artículo. Ahora tienes un producto en tu cesta
            </p>
          </div>
        </div>
        <div className='gancho__botones'>
          <ButtonComponent location='/' color='verde' name='Regresar al Home' />
          <button className='verde' onClick={handleClick}>Ver Cesta</button>
        </div>
        <div className='gancho__contenedor'>
          <p className='texto-gancho'>Los clientes que compraron este producto también compraron:</p>
          <div className='gancho__contenedor--grupo'>
            {
              services.map((data) => (
                <div className='losbonos' key={data.id}>
                  <Bono image={data.Image} description={data.Description} name={data.SureName} price={data.Price} />
                  <button className='naranjab' onClick={handleAdd}>Añadir a cesta</button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  );
};

const mapStateToProps = (state) => {
  console.log('datosvehiculares', state);
  return {
    data: state.dataUser[0],
  };
};

const mapDispatchToProps = {
  getDataCesta,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gancho));
