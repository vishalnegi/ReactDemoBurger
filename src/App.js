import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {

  render() {
    console.clear()
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;
