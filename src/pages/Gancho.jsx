/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/pages/gancho.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDataCesta, updateDataCesta } from '../actions';

import ButtonComponent from '../components/ButtonComponent';
import Bono from '../components/Bono';

const Gancho = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [services, setServices] = React.useState([]);
  const [datos, setDatos] = React.useState('');
  if (props.data.id === undefined && datos === '') {
    const dataJSON1 = props.data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    setDatos(newData.dataUser);
  } else if (datos === '') {
    setDatos(props.data);
  }

  const upData = {
    data: {
      Email: datos.Email,
      PhoneNumber: datos.PhoneNumber,
    },
    history: props.history,
  };
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
    props.getDataCesta(upData);
  };

  const handleAdd = (data) => {
    const id = parseInt(data.id.toString().substring(1, 2));
    if (id === 2) {
      const upData2 = {
        ProductName2: data.SureName,
        Discount2: data.Discount || 0,
        Price2: data.Price,
      };
      props.updateDataCesta(upData2, upData);
    } else if (id === 3) {
      const upData3 = {
        ProductName3: data.SureName,
        Discount3: data.Discount || 0,
        Price3: data.Price,
      };
      props.updateDataCesta(upData3, upData);
    } else if (id === 4) {
      const upData4 = {
        ProductName2: data.SureName,
        Discount2: data.Discount || 0,
        Price2: data.Price,
      };
      props.updateDataCesta(upData4, upData);
    }
  };

  return (
    loading ? <section className='gancho'><h6 className='loading'>Loading...</h6></section> : (
      <section className='gancho'>
        <div className='gancho__container--contenido'>
          <div className='gancho__header'>
            <span className='check'>&#10004;</span>
            <p>
              Se añadio un nuevo artículo. Ahora tienes un producto en tu cesta
            </p>
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
                    <button className='naranjab' onClick={() => handleAdd(data)}>Añadir a cesta</button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    )
  );
};

const mapStateToProps = (state) => {
  console.log('datosvehiculares', state);
  return {
    data: document.cookie || state.dataUser[0],
  };
};

const mapDispatchToProps = {
  getDataCesta,
  updateDataCesta,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gancho));
