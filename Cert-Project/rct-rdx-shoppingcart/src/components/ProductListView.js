import React, { Component } from 'react'

//import store
//subscribe to store (constructor)

import { StoreProdView, CartProdView } from './ProductView.js';

export default class ProductListView extends Component {

  render() {

    const {type, products} = this.props;

    return (
      <div>
        {
          products.map(
            (prod,idx) => {
              switch (type){
                case 'STORE':
                  return (
                    <StoreProdView
                      key={idx}
                      product={prod}
                    />
                  );
                case 'CART':
                  return (
                    <CartProdView
                      key={idx}
                      product={prod}
                    />
                  );
                default:
                  return (
                    <alert key={idx}>
                      {'ERROR: no product view type define'}
                    </alert>
                  );
                }
            }
          )
        }
      </div>
    );
  }
}
