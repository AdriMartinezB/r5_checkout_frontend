import React from 'react';
import '../assets/styles/components/carrusel.scss'
import ButtonComponent from './ButtonComponent';
import SOAT from '../assets/img/Carrusel/SOAT_1.png';
import MOTO from '../assets/img/Carrusel/Seguro_moto.png';
import HUELLITAS from '../assets/img/Carrusel/Seguro_huellitas.png';
import CREDITO from '../assets/img/Carrusel/Credito.png'

const Carrusel = () => {
    return(

        <div className = 'carousel'>
                
            <div className = 'carousel__container'>
                <ul className = 'slider'>
                    <li id = 'slider1'>
                        <div className = 'carousel-item'>
                            <img className = 'carousel-item__img' src={SOAT} alt="soat"/>
                            <div className = 'carousel-item__details'>
                                <h1 className = 'carousel-item__details--title'> SOAT</h1>
                                <div className = 'botonCotizar'>
                                    <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li id = 'slider2'>
                        <div className = 'carousel-item'>
                            <img className = 'carousel-item__img' src={MOTO} alt="seguro de moto"/>
                            <div className = 'carousel-item__details'>
                                <h1 className = 'carousel-item__details--title'> Seguro de moto</h1>
                                <div className = 'botonCotizar'>
                                    <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li id = 'slider3'>
                        <div className = 'carousel-item'>
                            <img className = 'carousel-item__img' src={HUELLITAS} alt="Seguro de huellitasT"/>
                            <div className = 'carousel-item__details'>
                                <h1 className = 'carousel-item__details--title'> Seguro para mascotas</h1>
                                <div className = 'botonCotizar'>
                                    <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li id = 'slider4'>
                        <div className = 'carousel-item'>
                            <img className = 'carousel-item__img' src={CREDITO} alt="credito"/>
                            <div className = 'carousel-item__details'>
                                <h1 className = 'carousel-item__details--title'> Crédito</h1>
                                <div className = 'botonCotizar'>
                                    <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>

        
    )
};

export default Carrusel;