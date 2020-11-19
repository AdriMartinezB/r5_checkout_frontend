import React from 'react';

import Producto from '../components/Producto';

import '../assets/styles/containers/listOfProducts.scss';

const ListOfProducts = () => {
  return (
    <ul className='listOfItems'>
      <li><Producto /></li>
      <li><Producto /></li>
    </ul>
  );
};

export default ListOfProducts;
