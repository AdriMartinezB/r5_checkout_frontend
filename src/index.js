import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'placa': [],
  'dataUser': [],
  'data': [
    {
      'id': 1,
      'OwnerNames': 'Name ',
      'OwnerLastNames': 'LastName',
      'DocumentType': 'Type',
      'DocumentNumber': '111111',
      'ValidityStartDate': '2018-11-29',
      'ValidityEndDate': '2019-11-29',
      'InsuranceCompany': 'Company',
      'PolicyNumber': 111111,
      'FasecoldaCode': 11111,
      'RegistrationNumber': 'ABC123',
      'CarMake': 'Make',
      'VehicleType': 'Type',
      'RegistrationYear': 2000,
      'CarModel': 'Model',
      'Description': 'Description',
      'SoatDiscount': 0,
      'PriceSoat': 0,
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk))); // redux thunk
//const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
