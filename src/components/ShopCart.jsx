import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


//components
import Cart from '../shared/Cart';

//context
import { CartContext } from '../context/CartContextProvider';

// Styles
import styles from './ShopCart.module.css';


const ShopCart = () => {
    const {state , dispatch} = useContext(CartContext)

    const navigateTo = useNavigate();

    useEffect(() => {
        window.scrollTo(0 , 0);
    } , [])

    return (
        <div className={styles.container}>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} state={state}/>)}
            </div>
            {
                state.itemsCount > 0 &&
                   
                    <div className={styles.infoContainer}>
                        <p>Total Items: {state.itemsCount}</p>
                        <p>Total Price: <span>{state.total}$</span></p>
                        <button className={styles.clearBtn} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button className={styles.checkOutBtn} onClick={() => dispatch({type: "CHECK_OUT"})}>Check Out</button>
                    </div>
                   
            }

            {
                state.checkOut &&
                    <div className={styles.postActionContainer}>
                        <h1>Checked out successfully!!</h1>
                        <button className={styles.btn} onClick={() => navigateTo('/')}>want to buy somthing?</button>
                    </div>
            }

            {
                !state.checkOut && state.itemsCount === 0 &&
                    <div className={styles.postActionContainer}>
                        <h1>Nothing here!!!</h1>
                        <button className={styles.btn} onClick={() => navigateTo('/')}>want to buy somthing?</button>
                    </div>
            }
        </div>
    );
};

export default ShopCart;