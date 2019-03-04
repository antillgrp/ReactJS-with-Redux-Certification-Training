import React, { Component } from 'react';

import ReduxEngine from '../redux';

export default class CheckoutHistory extends Component {

    constructor(props){
        super(props);
        this.state={remounting:true};
        ReduxEngine.reduxStore.subscribe(() => {
            this.setState({remounting:true});
        });
    }

    render() {
        const {checkoutHistory,users,userLoggedInId} = ReduxEngine.reduxStore.getState();
        //only renders for admin user for now the only one userLoggedInId === 1
        const {remounting} = this.state;
        remounting && setTimeout(
            () => this.setState({remounting:false}),
            1500
        );

        const fontStyle = (f,v) => ({fontSize:`calc(${f}px + ${v}vmin)`});

        return (
            (checkoutHistory.length > 0 && userLoggedInId === 1)
            &&
            <>
                <fieldset>
                    <legend>
                        <big><strong>Checkout History</strong></big>
                    </legend>
                    {
                        remounting
                        ?
                            'Loading...'
                        :
                            <>
                                {
                                    checkoutHistory.map( (entry, idx) =>
                                        <fieldset key={idx}>
                                            <strong>On:</strong> { entry.date }
                                            {' '}
                                            <strong>User:</strong> { users.filter( u => u.id === entry.userId)[0].userName }
                                            {' '}
                                            <strong>Bought:</strong> { entry.products.map( (p,i) =>
                                                (<span key={i} >{"["}{ p.title } x { p.inventory }{"]"}</span>)
                                            ) }
                                            {' '}
                                            <strong>and Paid:</strong> {entry.paid}
                                        </fieldset>
                                    )
                                }
                            </>
                    }
                </fieldset>
            </>
        );
    }
}

