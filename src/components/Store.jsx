import React, {useContext, useEffect} from 'react';

//context
import { ProductsContext } from '../context/ProductsContextProvider';

//componentss
import Product from '../shared/Product';

// Styles
import styles from './Store.module.css';

const Store = () => {
    const products = useContext(ProductsContext);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <>
            <h1 className={styles.text}>All products</h1>
            <div className={styles.container}>
                {products.map(product => <Product key={product.id} productData={product}/>)}
            </div>
        </>
    );
};

export default Store;