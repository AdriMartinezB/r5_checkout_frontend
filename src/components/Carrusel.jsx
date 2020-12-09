import React from 'react';
import '../assets/styles/components/carrusel.scss'
import ButtonComponent from './ButtonComponent';
import SOAT from '../assets/img/Carrusel/SOAT.png';
import MOTO from '../assets/img/Carrusel/Seguro_moto.png';
import HUELLITAS from '../assets/img/Carrusel/Seguro_huellitas.png';
import CREDITO from '../assets/img/Carrusel/Credito.png'

const Carrusel = () => {
    return(

        <div className = 'carousel'>
                
            <div className = 'carousel__container'>
                <ul className = 'slider'>

                    <li className = 'slider1'>
                        <div className = 'carousel-item'>
                            <img className = 'carousel-item__img' id='img__soat' src={SOAT} alt="soat"/>
                            <div className = 'carousel-item__details'>
                                <h1 className = 'carousel-item__details--title'> SOAT</h1>
                                <div className = 'botonCotizar'>
                                    <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className = 'slider2'>
                        <div className = 'carousel-item'>
                            <img className = 'carousel-item__img' id='img__moto' src={MOTO} alt="seguro de moto"/>
                            <div className = 'carousel-item__details'>
                                <h1 className = 'carousel-item__details--title'> Seguro de moto</h1>
                                <div className = 'botonCotizar'>
                                    <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className = 'slider3'>
                        <div className = 'carousel-item'>
                            <img className = 'carousel-item__img' id='img__huella' src={HUELLITAS} alt="Seguro de huellitasT"/>
                            <div className = 'carousel-item__details'>
                                <h1 className = 'carousel-item__details--title'> Seguro para <br/> mascotas</h1>
                                <div className = 'botonCotizar'>
                                    <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className = 'slider4'>
                        <div className = 'carousel-item'>
                            <img className = 'carousel-item__img' id='img__credito' src={CREDITO} alt="credito"/>
                            <div className = 'carousel-item__details'>
                                <h1 className = 'carousel-item__details--title'> Crédito</h1>
                                <div className = 'botonCotizar'>
                                    <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
                                </div>
                            </div>
                        </div>
                    </li>
                    <div className = 'navigation-auto'>
                        <div className = 'auto-btn1'></div>
                        <div className = 'auto-btn2'></div>
                        <div className = 'auto-btn3'></div>
                        <div className = 'auto-btn4'></div>
                    </div>
                </ul>

            </div>            
            
        </div>


        
    )
};

export default Carrusel;