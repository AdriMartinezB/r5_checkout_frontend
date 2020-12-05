export const actions = {
  dataRequest: 'DATA_REQUEST',
  setError: 'SET_ERROR',
  dataPlaca: 'DATA_PLACA',
  dataUser: 'DATA_USER',
};

export const dataRequest = (payload) => ({
  type: actions.dataRequest,
  payload,
});

export const SetError = (payload) => ({
  type: actions.setError,
  payload,
});

export const dataPlaca = (payload) => ({
  type: actions.dataPlaca,
  payload,
});

export const dataUser = (payload) => ({
  type: actions.dataUser,
  payload,
});

export const getDataRequest = (payload, props) => {
  return (dispatch) => {
    fetch(`https://heroprodev.herokuapp.com/api/soatDetails/${payload}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(dataRequest(data)))
      .then(() => props.history.push('/cotizacion'))
      .catch((err) => dispatch(setError(err)));
  };
};
