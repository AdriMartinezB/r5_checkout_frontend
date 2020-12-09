import React from 'react';

const [datos, setDatos] = React.useState('');

const useCookie = (data) => {
  if (data.id === undefined && datos === '') {
    const dataJSON1 = data.replace(/=/g, ':');
    const dataJSON = dataJSON1.replace(/}; {/g, ',');
    const newData = JSON.parse(dataJSON);
    setDatos(newData);
  } else if (datos === '') {
    setDatos(data);
  }
  return datos;

};

export default { useCookie, datos };
