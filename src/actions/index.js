export const actions = {
  dataPlaca: 'DATA_PLACA',
};

export const dataPlaca = (payload) => {
  return (dispatch) => {
    fetch(`https://heroprodev.herokuapp.com/api/soatDetails/${placaUp}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
//   }
//   type: actions.dataPlaca,
//   payload,
};
