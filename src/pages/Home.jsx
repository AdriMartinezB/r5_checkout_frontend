import React from 'react';

import '../assets/styles/pages/home.scss';
import InfoSlider from '../components/InfoSlider';
import Slider from '../components/slider';
import Carrusel from '../components/Carrusel'

const Home = () => {
  return (
    <div className='home'>
      <Carrusel />
      <Slider />
      <InfoSlider />
    </div>
  );

};

export default Home;
