import React from 'react';

import '../assets/styles/components/tarjetaCarrusel';
import Flecha_ampliar_derecha from '../assets/img/Carrusel/Flecha_ampliar_derecha';
import Flecha_ampliar_izquierda from '../assets/img/Carrusel/Flecha_ampliar_izquierda'
import SOAT from '../assets/img/Carrusel/SOAT';

const TarjetaCarrusel = () => {
  return(
    <div className = 'carousel__container'>
      <div className = 'carousel-item'>
        <img className = 'carousel-item__img' src={SOAT} alt="Imagen SOAT"/>
        <div className = 'carousel-item__details'>
            <div>
              <img src={Flecha_ampliar_izquierda} alt="Flecha_izquierda"/>
              <img src={Flecha_ampliar_derecha} alt="Flecha_derecha"/>
            </div>
            <p>Hasta $75.000 de <br/> descuento en tu SOAT</p>
        </div>
      </div>
    </div>
    
  );
};
  
export default TarjetaCarrusel;