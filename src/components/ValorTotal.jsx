import React from 'react';

import '../assets/styles/components/valorTotal.scss';
import Gancho from '../pages/Gancho';

const ValorTotal = ({ valorSoat }) => {
  return (
    <section className='valor'>
      <div className='valor-title'>
        <p>Valor total de tu SOAT</p>
      </div>

      <div className='valor-precio'>
        <h1>
          $
          {valorSoat}
        </h1>
      </div>

      <a href='#modalgancho' id='show-modal' className='boton_agregaralacesta'><p>Agregar a la cesta</p></a>

      <aside id='modalgancho' className='modalgancho'>
        <div className='content-modalgancho'>
          <Gancho />
        </div>
      </aside>
    </section>
  );
};

export default ValorTotal;
