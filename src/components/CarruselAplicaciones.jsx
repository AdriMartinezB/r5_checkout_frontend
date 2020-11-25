import React from 'react';
import '../assets/styles/components/carruselAplicaciones.scss'
import ButtonComponent from './ButtonComponent';
import SOAT from '../assets/img/Carrusel/SOAT.png';
import MOTO from '../assets/img/Carrusel/Seguro_moto.png'
import HUELLITAS from '../assets/img/Carrusel/Seguro_huellitas.png'
import CREDITO from '../assets/img/Carrusel/Credito.png'


const CarruselAplicaciones = () => {
    return(
        <div className = 'Carousel'>

            <div className = 'Carousel__container'> 
                <div className = 'Carousel-item'>
                    <img className = 'Carousel-item__img' src={SOAT} alt="Imagen-SOAT"/>
                    <div className = 'Carousel-item__details'>
                        <div>
                            <ButtonComponent location='/ingresaPlaca' color='blanco' name='Conocer más' />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className = 'Carousel__container'> 
                <div className = 'Carousel-item'>
                    <img className = 'Carousel-item__img' src={MOTO} alt="Imagen-Seguro-moto"/>
                    <div className = 'Carousel-item__details'>
                        <div>
                            <ButtonComponent location='/ingresaPlaca' color='blanco' name='Conocer más' />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className = 'Carousel__container'> 
                <div className = 'Carousel-item'>
                    <img className = 'Carousel-item__img' src={HUELLITAS} alt="Imagen-seguro-de-huellas"/>
                    <div className = 'Carousel-item__details'>
                        <div>
                            <ButtonComponent location='/ingresaPlaca' color='blanco' name='Conocer más' />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className = 'Carousel__container'> 
                <div className = 'Carousel-item'>
                    <img className = 'Carousel-item__img' src={CREDITO} alt="Imagen-credito"/>
                    <div className = 'Carousel-item__details'>
                        <div>
                            <ButtonComponent location='/ingresaPlaca' color='blanco' name='Conocer más' />
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
};

export default CarruselAplicaciones;