import React, { Component } from 'react';

import Layout from './components/shared/Layout';
import Store from './components/Store';
import Cart from './components/Cart';
import CheckoutHistory from './components/CheckoutHistory';

class App extends Component {
  render() {
    this.title = 'browser preview works!!'; // set a breakpoint here
    return (
      <Layout>
        <Store />
        <Cart />
        <CheckoutHistory />
      </Layout>
    );
  }
}

export default App;

