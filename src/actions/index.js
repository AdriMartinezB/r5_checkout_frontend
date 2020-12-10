/* eslint-disable radix */
/* eslint-disable no-new-wrappers */

export const actions = {
  dataRequest: 'DATA_REQUEST',
  setError: 'SET_ERROR',
  dataUser: 'DATA_USER',
  dataCesta: 'DATA_CESTA',
  updateCesta: 'UPDATE_CESTA',
  autenticacion: 'AUTENTICATION',
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

export const updateCesta = (payload) => ({
  type: actions.updateCesta,
  payload,
});

export const autenticacion = (payload) => ({
  type: actions.autenticacion,
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
    })
      .then((res) => res.json())
      .then((data) => {
        const dataCookie = JSON.stringify(data);
        document.cookie = `{"data"=${dataCookie}};max-age=990`;
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
        const dataCookie = JSON.stringify(data);
        document.cookie = `{"dataUser"=${dataCookie}};max-age=950`;
        return dispatch(dataUser(data));
      })
      .then(() => props.history.push('/descuento'))
      .catch((err) => dispatch(setError(err)));
  };
};

export const setDataCarkMarket = (data, props) => {
  return (dispatch) => {
    fetch('https://heroprodev.herokuapp.com/api/marketCarts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 1234,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        const dataCookie = JSON.stringify(data);
        document.cookie = `{"dataCesta"=${dataCookie}};max-age=910`;
        return dispatch(dataCesta(data));
      })
      .then(() => props.history.push('/gancho'))
      .catch((err) => dispatch(setError(err)));
  };
};

export const getDataCesta = (props) => {
  return (dispatch) => {
    const phonenumber = props.data.PhoneNumber;
    const email = props.data.Email;
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
      .then((data) => {
        const dataCookie = JSON.stringify(data);
        document.cookie = `{"dataCesta"=${dataCookie}};max-age=850`;
        return dispatch(dataCesta(data));
      })
      .then(() => props.history.push('/cesta'))
      .catch((err) => dispatch(setError(err)));
  };
};

export const updateDataCesta = (updata, props) => {
  return (dispatch) => {
    const phonenumber = props.data.PhoneNumber;
    const email = props.data.Email;
    fetch('https://heroprodev.herokuapp.com/api/marketCarts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 1234,
        phonenumber,
        email,
      },
      body: JSON.stringify(updata),
    })
      .then(() => dispatch(updateCesta({ 'message': 'ok' })))
      .catch((err) => dispatch(setError(err)));
  };
};
export const getConfirmacionTrajeta = (datos, props) => {
  return (dispatch) => {
    fetch(`https://heroprodev.herokuapp.com/api/creditCards/${datos.DocumentNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 1234,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const nCard = new String(datos.CardNumber.slice(12, 16));
        const card = parseInt(nCard);
        const cvv = parseInt(datos.Cvv);
        if (data[0].CardNumber === card && data[0].Cvv === cvv) {
          sessionStorage.setItem('message', 'acessOk');
          dispatch(autenticacion({ 'message': 'ok' }));
        } else {
          dispatch(autenticacion({ 'message': 'denied' }));
        }
      })
      .then(() => props.history.push('/pago'))
      .catch((err) => dispatch(setError(err)));
  };
};
