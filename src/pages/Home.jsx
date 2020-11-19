import React from 'react';

import '../assets/styles/pages/home.scss';
import InfoSlider from '../components/InfoSlider';
import Slider from '../components/slider';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <InfoSlider />
    </div>
  );

};

export default Home;
