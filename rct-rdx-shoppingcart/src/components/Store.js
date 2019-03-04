import React, { Component } from 'react';

import ProductListView from './ProductListView';

import ReduxEngine from '../redux';

export default class Store extends Component {

    constructor(props){
        super(props);
        this.state={remounting:true};
        ReduxEngine.reduxStore.subscribe(() => {
            this.setState({remounting:true});
        });
    }

    render() {
        const {storeProducts} = ReduxEngine.reduxStore.getState();
        const {remounting} = this.state;
        remounting && setTimeout(
            () => this.setState({remounting:false}),
            500
        );
        const fontStyle = (f,v) => ({fontSize:`calc(${f}px + ${v}vmin)`});
        return (
            <>
                <fieldset style={{border: '2px solid black'}}>
                    <legend
                        style={{
                            border: '2px solid black',
                            padding: '0 2vmin 0 2vmin',
                            ...fontStyle(14,5)
                        }}
                    >
                        Store
                    </legend>
                        {
                            remounting
                            ?
                                'Loading...'
                            :
                            <ProductListView
                                type='STORE'
                                products={storeProducts}
                            />
                        }
                </fieldset>
            </>
        );
    }
}

