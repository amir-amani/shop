import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../context/CartContextProvider';

//functions
import { shortener, isInCart, quantityCount } from '../helper/functions';

//Styles
import styles from './Product.module.css';

//Icons 
import trashIcon from '../assets/trash.svg'


const Product = ({productData}) => {

    const {state , dispatch} = useContext(CartContext);


    return (
        <div className={styles.container}>
            <img src={productData.image} className={styles.productIMG} alt='productImg'/>
            <hr/>
            <h3 className={styles.productTitle}>{productData.title}</h3>
            <p className={styles.productPrice}>{productData.price}$</p>
            <div>
                <div className={styles.productDetail}>
                    <Link to={`/products/${productData.id}`} className={styles.link}>details</Link>
                </div>
                <br />
                {quantityCount(state , productData) === 1 && <button 
                                                                className={styles.removeBtn}
                                                                onClick={() => dispatch({type: "REMOVE" , payload: productData})}><div><img src={trashIcon} alt='trashIcon'/></div></button>}
                {quantityCount(state , productData) > 1 && <button
                                                                className={styles.decrease}
                                                                onClick={() => dispatch({type: "DECREASE" , payload: productData})}>-</button>}
                {quantityCount(state , productData) > 0 && <span className={styles.counter}>{quantityCount(state, productData)}</span>}
                {isInCart(state , productData) 
                    ? <button 
                        className={styles.increase}
                        onClick={() => dispatch({type: "INCREASE" , payload: productData})}>+</button>
                    : <button 
                        className={styles.addToCart}
                        onClick={() => dispatch({type: "ADD_ITEM" , payload: productData})}>Add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;