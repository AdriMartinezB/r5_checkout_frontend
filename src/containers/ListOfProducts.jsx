import React from 'react';

import Producto from '../components/Producto';

import '../assets/styles/containers/listOfProducts.scss';

const ListOfProducts = (props) => {
  return (
    <ul className='listOfItems'>
      <li><Producto data={props} /></li>
    </ul>
  );
};

export default ListOfProducts;
