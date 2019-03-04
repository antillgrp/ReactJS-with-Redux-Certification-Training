import React, { Component } from 'react'

import ReduxEngine from '../redux';

export class StoreProdView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buying:false,
        }
    }

    toggleBuyingHandler = e => {
        e.preventDefault();
        this.setState({
            buying:!this.state.buying,
        });
    };

    render() {
        const {product} = this.props;
        const {buying} = this.state;

        let countRef = null;
        const confirmHandler = e => {
            e.preventDefault();
            ReduxEngine.reduxStore.dispatch(
                ReduxEngine.addToCartAction(product.id,countRef.value)
            );
        };
        //style={{float:'right'}}
        const fontStyle = (f,v) => ({fontSize:`calc(${f}px + ${v}vmin)`});
        return (
            (+product.inventory > 0)
            &&
            <form onSubmit={confirmHandler}>
                <fieldset style={{border: '2px dotted black'}}>
                    <legend style={fontStyle(10,3)}>
                        {product.title}
                    </legend>
                    <span>
                        <button
                            onClick={this.toggleBuyingHandler}
                            style={fontStyle(8,2)}
                        >
                            {buying ? 'Cancel' : 'Add to cart'}
                        </button>
                        {' '}
                        {
                            buying
                            &&
                            <>
                                <input
                                    ref={ node => countRef = node }
                                    type='number'
                                    min='1' max={product.inventory}
                                    defaultValue='1'
                                    editable='false'
                                    style={fontStyle(8,2)}
                                />
                                {' '}
                                <input
                                    type="submit"
                                    value="Confirm"
                                    style={fontStyle(8,2)}
                                />
                            </>
                        }
                    </span>
                    <span
                        style={{
                            ...fontStyle(8,3),
                            float:'right',
                        }}
                    >
                        Price: <b>{product.price}</b>
                    </span>
                </fieldset>
            </form>
        );
    }
}

export class CartProdView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            returning:false,
        }
    }

    toggleReturningHandler = e => {
        e.preventDefault();
        this.setState({
            returning:!this.state.returning,
        });
    };

    render() {

        const {product} = this.props;
        const {returning} = this.state;

        let countRef = null;
        const confirmHandler = e => {
            e.preventDefault();
            ReduxEngine.reduxStore.dispatch(
                ReduxEngine.backToStoreAction(product.id,countRef.value)
            );
        };

        const fontStyle = (f,v) => ({fontSize:`calc(${f}px + ${v}vmin)`});

        return (
            (+product.inventory > 0)
            &&
            <form onSubmit={confirmHandler}>
                <fieldset style={{border: '2px dotted black'}}>
                    <legend style={fontStyle(10,3)}>
                        {product.title}
                    </legend>
                    <span style={fontStyle(8,3)} >
                        Count: <b>{product.inventory}</b>
                        {' '}
                        Total Price: <b>{(product.inventory * product.price).toFixed(2)}</b>
                    </span>
                    <span style={{float:'right'}}>
                        <button
                            onClick={this.toggleReturningHandler}
                            style={fontStyle(8,2)}
                        >
                            {returning ? 'Cancel' : 'Remove from Cart'}
                        </button>
                        {' '}
                        {
                            returning
                            &&
                            <>
                                <input
                                    ref={ node => countRef = node }
                                    type='number'
                                    min='1' max={product.inventory}
                                    defaultValue={product.inventory}
                                    editable='false'
                                    style={fontStyle(8,2)}
                                />
                                {' '}
                                <input
                                    type="submit"
                                    value="Confirm"
                                    style={fontStyle(8,2)}
                                />
                            </>
                        }
                    </span>
                </fieldset>
            </form>
        );
    }

}


