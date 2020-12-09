import React from 'react';
import useCookie from './useCookie';

const [datos, setDatos] = React.useState('');

const useVerification = (data) => {
  if (data.id === undefined && datos === '') {
    return setDatos(data);
  }
  setDatos(useCookie(data).data);

  return datos;
};

module.exports = {
  useVerification,
  datos,
};
