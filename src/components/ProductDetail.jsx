import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Styles
import styles from './ProductDetail.module.css';


// helper functions 
import { quantityCount , isInCart} from '../helper/functions';

//Icons 
import trashIcon from '../assets/trash.svg'

//context
import { CartContext } from '../context/CartContextProvider';
import { ProductsContext } from '../context/ProductsContextProvider';

const ProductDetail = () => {
    const params = useParams();
    const id = params.id;

    const {state , dispatch} = useContext(CartContext);
    const products = useContext(ProductsContext)

    const navigateTo = useNavigate();

    const [prod , setProd] = useState({});
    const [notFound , setNotFound] = useState(false);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProd(data))
            .catch(() => setNotFound(true))
        
    } , [params])
    
    
    const {title , price , category , description , image} = prod;

    return (
        <div>
            {!notFound ?
            <div className={styles.container}>            
                <div className={styles.textContainer}>
                    <h1>{title}</h1>
                    <p className={styles.description}>{description}</p>
                    <p><span>category: </span>{category}</p>
                    <div>
                        <span>price: {price}$</span>
                        
                    </div>
                    <div className={styles.btns}>
                        {quantityCount(state , prod) === 1 && <button 
                                                                    className={styles.removeBtn}
                                                                    onClick={() => dispatch({type: "REMOVE" , payload: prod})}><div><img src={trashIcon} alt='trashIcon'/></div></button>}
                        {quantityCount(state , prod) > 1 && <button
                                                                        className={styles.decrease}
                                                                        onClick={() => dispatch({type: "DECREASE" , payload: prod})}>-</button>}
                        {quantityCount(state , prod) > 0 && <span className={styles.counter}>{quantityCount(state, prod)}</span>}
                        {isInCart(state , prod) 
                            ? <button 
                                className={styles.increase}
                                onClick={() => dispatch({type: "INCREASE" , payload: prod})}>+</button>
                            : <button 
                                className={styles.addToCart}
                                onClick={() => dispatch({type: "ADD_ITEM" , payload: prod})}>Add to cart</button>
                        }
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.link} onClick={() => navigateTo(-1)}>Go back</button>
                    </div>
                </div>
                <img className={styles.prodImg} src={image}/>
            </div>
            :
            <h1>Not found</h1>
            }
        </div>
    );
};

export default ProductDetail;