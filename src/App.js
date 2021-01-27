import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    console.clear()
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
