import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/valorTotal.scss';

const ValorTotal = () => {
  return (
    <section className='valor'>
      <div className='valor-title'>
        <p>Valor total de tu SOAT</p>
      </div>

      <div className='valor-precio'>
        <h1>$455.400</h1>
      </div>

      <Link className='valor--Link' to='/cesta'>
        <button className='valor--button'>Agregar a la Cesta</button>
      </Link>
    </section>
  );
};

export default ValorTotal;
