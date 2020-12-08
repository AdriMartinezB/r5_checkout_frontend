// import { arguments } from "file-loader";

export const actions = {
  dataRequest: 'DATA_REQUEST',
  setError: 'SET_ERROR',
  dataUser: 'DATA_USER',
  dataCesta: 'DATA_CESTA',
};

export const dataRequest = (payload) => ({
  type: actions.dataRequest,
  payload,
});

export const SetError = (payload) => ({
  type: actions.setError,
  payload,
});

export const dataUser = (payload) => ({
  type: actions.dataUser,
  payload,
});

export const dataCesta = (payload) => ({
  type: actions.dataCesta,
  payload,
});

export const getDataRequest = (payload, props) => {
  return (dispatch) => {
    fetch(`https://heroprodev.herokuapp.com/api/soatDetails/${payload}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 1234,
      },
      //body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        const dataUser = JSON.stringify(data);
        document.cookie = `{"data":${dataUser}};max-age=120`;
        return dispatch(dataRequest(data));
      })
      .then(() => props.history.push('/cotizacion'))
      .catch((err) => dispatch(setError(err)));
  };
};

export const getDataUser = (email, phone, placa, props) => {
  return (dispatch) => {
    const data = { Email: email, PhoneNumber: phone, RegistrationNumber: placa };
    fetch('https://heroprodev.herokuapp.com/api/dbclients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 1234,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // const dataUser = JSON.stringify(data);
        // document.cookie = `{"dataUser":${dataUser}};max-age=120`;
        return dispatch(dataUser(data));
      })
      .then(() => props.history.push('/descuento'))
      .catch((err) => dispatch(setError(err)));
  };
};

export const setDataCarkMarket = (data, props) => {
  return (dispatch) => {
    console.log(data);
    fetch('https://heroprodev.herokuapp.com/api/marketCarts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 1234,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(dataCesta(data)))
      .then(() => props.history.push('/gancho'))
      .catch((err) => dispatch(setError(err)));
  };
};

export const getDataCesta = (props) => {
  return (dispatch) => {
    const phonenumber = props.data.PhoneNumber;
    const email = props.data.Email;
    console.log(phonenumber, email);
    fetch('https://heroprodev.herokuapp.com/api/marketCarts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 1234,
        phonenumber,
        email,
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(dataCesta(data)))
      .then(() => props.history.push('/cesta'))
      .catch((err) => dispatch(setError(err)));
  };
};
