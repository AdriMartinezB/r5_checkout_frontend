import React from 'react';

import '../assets/styles/pages/home.scss';
import Carrusel from '../components/Carrusel'
import CarruselAplicaciones from '../components/CarruselAplicaciones'

const Home = () => {
  return (
    <div className='home'>
      <Carrusel />
      <CarruselAplicaciones />
    </div>
  );

};

export default Home;
