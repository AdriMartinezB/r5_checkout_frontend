import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/App.scss';
//import PageUps from '../containers/PageUps';
import Layout from '../components/Layout';
import Producto from '../components/Producto';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Producto} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
