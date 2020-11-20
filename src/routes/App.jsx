import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/App.scss';
import PageUps from '../containers/PageUps';
import Layout from '../components/Layout';
import PopUpBeneficio from '../containers/PopUpBeneficio';
import Cesta from '../pages/Cesta';
import Pago from '../pages/Pago';
import Home from '../pages/Home';
import Cotizacion from '../pages/Cotizacion';
import Confirmacion from '../pages/Confirmacion';
import Descuento from '../pages/Descuento';
import UltimaCotizacion from '../pages/UltimaCotizacion';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cotizacionFinal' component={UltimaCotizacion} />
        <Route exact path='/popUpBeneficio' component={PopUpBeneficio} />
        <Route exact path='/cotizacion/' component={Cotizacion} />
        <Route exact path='/descuento/' component={Descuento} />
        <Route exact path='/confirmacion/' component={Confirmacion} />
        <Route exact path='/pago/' component={Pago} />
        <Route exact path='/cesta/' component={Cesta} />
        <Route exact path='/ups/' component={PageUps} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
