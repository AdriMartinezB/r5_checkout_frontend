import React from 'react';

import Producto from '../components/Producto';

import '../assets/styles/containers/listOfProducts.scss';

const ListOfProducts = (props) => {
  return (
    <li className='listOfItems'><Producto data={props} /></li>
  );
};

export default ListOfProducts;
