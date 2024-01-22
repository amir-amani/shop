import React, {createContext, useReducer} from 'react';

const initialState = {
    selectedItems: [],
    itemsCount: 0,
    total: 0,
    checkOut: false
}

const sumItmes = (items) => {
    const itemsCount = items.reduce((total, item) => total + item.quantity, 0);
    const total = items.reduce((total , item) => total + item.quantity * item.price , 0).toFixed(2);
    return {itemsCount , total};
}

const cartReducer = (state , action) => {
    // console.log(state);
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItmes(state.selectedItems),
                checkOut: false,
            }
            
        case "REMOVE":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],

                //must give the new selectedItems to sumItems here:
                ...sumItmes(newSelectedItems),
                }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItmes(state.selectedItems)
            };

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItmes(state.selectedItems)
            };


        case "CLEAR":
            return {
                selectedItems: [],
                itemsCount: 0,
                total: 0,
                checkOut: false
            }

        case "CHECK_OUT":
            return {
                selectedItems: [],
                itemsCount: 0,
                total: 0,
                checkOut: true
            }

        default: 
            return state;
    }

}


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(cartReducer , initialState);

    return (
        <CartContext.Provider value={{state , dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;