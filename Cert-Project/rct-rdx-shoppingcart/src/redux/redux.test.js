import ReduxEngine from './';

describe('Testing Redux Reducer', () => {
    it('With a bad action type should return initial state', () => {
        expect(
            ReduxEngine.productsReducer(
                undefined,
                {type:'BAD'}
            )
        ).toEqual(
                ReduxEngine.initialState
        );
    });
    it('Should properly handle ADD_TO_CART,BACK_TO_STORE,CHECKOUT', () => {
        expect(
            ReduxEngine.productsReducer(
                ReduxEngine.initialState,
                /*TESTED*/{type:'ADD_TO_CART', data:{ id: 1, count: 1}}
            ).cartProducts
        ).toHaveLength(
            1
        );
        expect(
            ReduxEngine.productsReducer(
                ReduxEngine.productsReducer(
                    ReduxEngine.initialState,
                    {type:'ADD_TO_CART', data:{ id: 1, count: 1}}
                ),
                /*TESTED*/{type:'BACK_TO_STORE',data:{ id: 1, count: 1}}
            ).cartProducts
        ).toHaveLength(
            0
        );
        expect(
            ReduxEngine.productsReducer(
                ReduxEngine.productsReducer(
                    ReduxEngine.initialState,
                    {type:'ADD_TO_CART', data:{ id: 1, count: 1}}
                ),
                /*TESTED*/{type:'CHECKOUT'}
            ).cartProducts
        ).toHaveLength(
            0
        );
    });
});