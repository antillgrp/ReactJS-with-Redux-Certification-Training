import { createStore } from 'redux';

class RdxEngine{ //SINGLETON

    constructor (){
        this.reduxStore = createStore(this.productsReducer);
        Object.freeze(this);
    }

    get initialState() {
        return {
            //Store Products
            storeProducts: [
                {id: 1, title: "TV",     price: 11500.01, inventory: 5},
                {id: 2, title: "Fridge", price: 11110.99, inventory: 20},
                {id: 3, title: "Mobile", price: 1119.99,  inventory: 5},
            ],
            //Cart Products
            cartProducts:[],
            //User logged in
            userLoggedInId:1,
            //user list
            users:[
                {id:1, userName:'admin', password:'Passw0rd'},
            ],
            checkoutHistory:[
                //ex. { date: getDate, userId:1, products: [], paid }
            ],
        };
    }

    get actionTypes() {
        return Object.freeze({
            ADD_TO_CART:'ADD_TO_CART',
            BACK_TO_STORE:'BACK_TO_STORE',
            CHECKOUT:'CHECKOUT',
        });
    }

    get productsReducer() {
        return (state=this.initialState, action) => {

            const {
                storeProducts,
                cartProducts,
                //users,
                userLoggedInId,
                checkoutHistory
            } = state;

            switch (action.type) {
                case this.actionTypes.ADD_TO_CART: {
                    //no validation done UI should be consistent
                    const {id, count} = action.data;

                    //it is always in the store, is not shown if inventory = 0
                    const [stProd] = storeProducts.filter(p => p.id === id);
                    const newStProdList = [
                        ...storeProducts.filter(p => p.id !== id),
                        {
                            ...stProd,
                            inventory: +stProd.inventory - +count,
                        }
                    ];

                    //it might or not be in the cart
                    const cartFltdArr = cartProducts.filter(p => p.id === id);
                    const newCartProdList = [
                        ...cartProducts.filter(p => p.id !== id),
                        {
                            ...stProd,
                            inventory: +count + (cartFltdArr.length ? +cartFltdArr[0].inventory : 0),
                        }
                    ];

                    return {
                        ...state,
                        storeProducts: newStProdList.sort((p1,p2) =>p1.id-p2.id),
                        cartProducts: newCartProdList.sort((p1,p2) =>p1.id-p2.id),
                    };
                }
                case this.actionTypes.BACK_TO_STORE: {
                    //no validation done UI should be consistent
                    const {id, count} = action.data;

                    //it should be in the cart
                    const [cartProd] = cartProducts.filter(p => p.id === id);
                    //wont be added if inventory <= 0
                    const newCartProdList = cartProducts.filter(p => p.id !== id);
                    if(+cartProd.inventory > +count ){
                        newCartProdList.push({
                            ...cartProd,
                            inventory: +cartProd.inventory - +count,
                        });
                    }
                    //it should be in the store even when inventory ===0
                    const [stProd] = storeProducts.filter(p => p.id === id);
                    const newStProdList = [
                        ...storeProducts.filter(p => p.id !== id),
                        {
                            ...stProd,
                            inventory:+stProd.inventory + +count,
                        }
                    ];

                    return {
                        ...state,
                        storeProducts: newStProdList.sort((p1,p2) =>p1.id-p2.id),
                        cartProducts: newCartProdList.sort((p1,p2) =>p1.id-p2.id),
                    };
                }
                case this.actionTypes.CHECKOUT:{
                    return {
                        ...state,
                        cartProducts:[],
                        checkoutHistory:[
                            ...checkoutHistory,
                            {
                                date: (new Date()).toLocaleString(),
                                userId: userLoggedInId,
                                products: [ ...cartProducts ],
                                paid: cartProducts.reduce(
                                    (total,prod) => +total + +prod.price * +prod.inventory,
                                    0
                                ),
                            }
                        ],
                    };
                }
                default:
                    return state;
            }
        }
    }

    get addToCartAction(){
        return (id, count) => ({
            type:this.actionTypes.ADD_TO_CART,
            data:{id:id, count:count},
        });
    }

    get backToStoreAction(){
        return (id, count) => ({
            type:this.actionTypes.BACK_TO_STORE,
            data:{id:id, count:count},
        });
    }

    get checkOutAction(){
        return () => ({
            type:this.actionTypes.CHECKOUT,
        });
    }
}

//SINGLETON
const ReduxEngine = new RdxEngine();
export default ReduxEngine;