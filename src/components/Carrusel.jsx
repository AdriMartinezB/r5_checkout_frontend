import React from 'react';
import '../assets/styles/components/carrusel.scss'
import ButtonComponent from './ButtonComponent';
import SOAT from '../assets/img/Carrusel/SOAT.png';
import Flecha_izq from '../assets/img/Carrusel/Flecha_ampliar_izquierda.png';
import Flecha_der from '../assets/img/Carrusel/Flecha_ampliar_derecha.png'


const Carrusel = () => {
    return(
        <div className = 'carousel'>
            <div>
                <button className = 'carousel-buttom__img'><img src={Flecha_izq} alt="Flecha_izq" width="40"/></button>
            </div>
            <div className = 'carousel__container'>
                
                <div className = 'carousel-item'>
                    <img className = 'carousel-item__img' src={SOAT} alt="Imagen-SOAT"/>
                    <div className = 'carousel-item__details'>
                        <div>
                            <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <button className = 'carousel-buttom__img'><img src={Flecha_der} alt="Flecha_der" width="40"/></button>
            </div>
        </div>
        
    )
};

export default Carrusel;