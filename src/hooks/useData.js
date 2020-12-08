const obtenerData = (path, method) => {
  fetch(`https://heroprodev.herokuapp.com/api/soatDetails/${path}`, {
    method: `${method}`,
    headers: {
      'Content-Type': 'application/json',
    },
    //body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => setData(data));
};

export default obtenerData;
