import React from 'react';
import '../assets/styles/components/resumen.scss';

const ResumenList = ({ product, price }) => {
  return (

    <li className='Resumen-info'>
      <h2>{product}</h2>
      <p>
        $
        {price}
      </p>
    </li>

  );
};

export default ResumenList;
