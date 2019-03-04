import React, { Component } from 'react';

import ProductListView from './ProductListView';

import ReduxEngine from '../redux';

export default class Cart extends Component {

    constructor(props){
        super(props);
        this.state={remounting:true};
        ReduxEngine.reduxStore.subscribe(() => {
            this.setState({remounting:true});
        });
    }

    checkOutHandler = () => ReduxEngine.reduxStore.dispatch(
        ReduxEngine.checkOutAction()
    );

    render() {
        const {cartProducts} = ReduxEngine.reduxStore.getState();
        const {remounting} = this.state;
        remounting && setTimeout(
            () => this.setState({remounting:false}),
            1000
        );
        const fontStyle = (f,v) => ({fontSize:`calc(${f}px + ${v}vmin)`});
        return (
            (cartProducts.length > 0)
            &&
            <>
                <fieldset style={{border: '2px solid black'}}>
                    <legend
                        style={{
                            border: '2px solid black',
                            padding: '0 2vmin 0 2vmin',
                            ...fontStyle(14,5)
                        }}
                    >
                        Cart
                    </legend>
                    {
                        remounting
                        ?
                            'Loading...'
                        :
                            <>
                                <ProductListView
                                    type='CART'
                                    products={cartProducts}
                                />
                                <br />
                                <button
                                    onClick={this.checkOutHandler}
                                    style={fontStyle(8,2)}
                                >
                                    <strong>Checkout</strong>
                                </button>
                            </>
                    }
                </fieldset>
            </>
        );
    }
}

