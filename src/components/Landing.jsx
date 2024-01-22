import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//Context
import { ProductsContext } from '../context/ProductsContextProvider';


//Styles
import styles from './Landing.module.css';

//Components
import Carousel from './Carousel';

const Landing = () => {
    
    const products = useContext(ProductsContext);

    const [mensCloth , setMensCloth] = useState([]);
    const [jewelery , setJewelery] = useState([]);
    const [electronics , setElectronics] = useState([]);
    const [womensCloth , setWomensCloth] = useState([]);

    
    
    useEffect(() => {
        setMensCloth(products.filter(prod => prod.category == "men's clothing"));
        setJewelery(products.filter(prod => prod.category == "jewelery"));
        setElectronics(products.filter(prod => prod.category == "electronics"));
        setWomensCloth(products.filter(prod => prod.category == "women's clothing"));

    } , [products])


    const navigateTo = useNavigate();

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Men's Clothing</h1>
            <Carousel products={mensCloth} />

            <h1 className={styles.title}>Jewelery</h1>
            <Carousel products={jewelery} />

            <h1 className={styles.title}>Electronics</h1>
            <Carousel products={electronics} />
            
            <h1 className={styles.title}>Women's Clothing</h1>
            <Carousel products={womensCloth} />


            
            <button className={styles.btn} onClick={() => navigateTo('/products')}>View All Products</button>
        </div>
    );
};

export default Landing;