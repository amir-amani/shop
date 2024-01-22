import React, { useContext } from 'react';

//functions
import { shortener, isInCart, quantityCount } from '../helper/functions';

//context
import { CartContext } from '../context/CartContextProvider';

// Styles
import styles from './Cart.module.css';

//Icons 
import trashIcon from '../assets/trash.svg'

const Cart = ({data}) => {
    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={data.image} alt="productIMG" className={styles.prodImg}/>
            <div className={styles.textContainer}>
                <h4>{data.title}</h4>
                <h5>{data.price}$</h5>
            </div>
            <div className={styles.btnContainer}>
                {data.quantity > 1 
                    ? <button 
                    onClick={() => dispatch({type: "DECREASE" , payload: data})}
                    className={styles.decrease}
                    >-</button>
                    : <button 
                    onClick={() => dispatch({type: "REMOVE" , payload: data})}
                    className={styles.removeBtn}
                    ><div><img src={trashIcon} alt='trashIcon'/></div></button>}
                    <h2 className={styles.counter}>{data.quantity}</h2>
                {<button  
                        onClick={() => dispatch({type: "INCREASE" , payload: data})}
                        className={styles.increase}
                        >+</button>}
                        
            </div>
        </div>
    );
};

export default Cart;