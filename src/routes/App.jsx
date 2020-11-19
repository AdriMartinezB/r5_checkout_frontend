import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/App.scss';
import PageUps from '../containers/PageUps';
import Layout from '../components/Layout';
import Cesta from '../pages/Cesta';
import Pago from '../pages/Pago';
import Home from '../pages/Home';
import Soat from '../pages/Soat';
import Confirmacion from '../pages/Confirmacion';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/soat/' component={Soat} />
        <Route exact path='/confirmacion/' component={Confirmacion} />
        <Route exact path='/pago/' component={Pago} />
        <Route exact path='/cesta/' component={Cesta} />
        <Route exact path='/ups/' component={PageUps} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
