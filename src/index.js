import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'autentication': [{ 'message': 'denied' }],
  'error': [{
    'message': 'false',
  }],
  'update': [{
    'message': 'error',
  }],
  'dataUser': [{
    'id': 1,
    'Email': 'example@example.com',
    'PhoneNumber': '3210000000',
    'Discount': 0,
    'PriceTotal': 0,
    'PriceDiscount': 0,
    'RegistrationNumber': 'ABC1234',
    'ProductName': '',
  }],
  'data': [
    {
      'id': 1,
      'OwnerNames': 'Name',
      'OwnerLastNames': 'LastName',
      'DocumentType': 'CC',
      'DocumentNumber': '123456789',
      'ValidityStartDate': '2000-01-01',
      'ValidityEndDate': '2001-01-01',
      'InsuranceCompany': 'Company',
      'PolicyNumber': 0,
      'FasecoldaCode': 0,
      'RegistrationNumber': 'ABC1234',
      'CarMake': 'Make',
      'VehicleType': 'Type',
      'RegistrationYear': 2000,
      'CarModel': 'Model',
      'Description': 'Description',
      'SoatDiscount': 0,
      'PriceSoat': 0,
    },
  ],
  'dataCesta': [
    { 'message': null, 'id': 0 },
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
