import React from 'react';
import '../assets/styles/components/resumen.scss';

const ResumenList = ({ product, price }) => {
  return (
    <ul className='Resumen-info-container'>
      <li className='Resumen-info'>
        <h2>{product}</h2>
        <p>
          $
          {price}
        </p>
      </li>
    </ul>
  );
};

export default ResumenList;
