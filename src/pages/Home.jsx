/* eslint-disable no-restricted-syntax */
import React from 'react';

import '../assets/styles/pages/home.scss';
import Carrusel from '../components/Carrusel';
import CarruselAplicaciones from '../components/CarruselAplicaciones';

const Home = () => {
  sessionStorage.setItem('message', 'undefined');
  const [del, setDel] = React.useState(true);
  const deleteAllCookies = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const spcook = cookies[i].split('=');
      document.cookie = `${spcook[0]}=;expires=Thu, 21 Sep 1979 00:00:01 UTC;`;
    }
    setDel(false);
  };
  if (del) {
    deleteAllCookies();
  }

  return (
    <div className='home'>
      <Carrusel />
      <CarruselAplicaciones />
    </div>
  );

};

export default Home;
