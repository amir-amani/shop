import React, {useContext, useState, useEffect} from 'react';

import * as uuid from 'uuid';

//context
import { ProductsContext } from '../context/ProductsContextProvider';

// Components
import Product from './Product';

//styles
import styles from './SearchBar.module.css';

//Icon
import searchIcon from '../assets/search.svg';


const SearchBar = () => {
    const products = useContext(ProductsContext);

    const [searchField , setSearchField] = useState("");
    const [showField , setShowField] = useState(false);

    const handleChange = (event) => {
        setSearchField(event.target.value);
    }

    useEffect(() => {
        if(searchField.length) setShowField(true);
        else setShowField(false);
    }, [searchField]);

    const handleBtn = () => {
        setShowField(false);
        setSearchField("");
    }

    const determineClass = () => {
        if(showField) return styles.field;
        else return styles.fieldHidden;
    }

    const filteredProd = products.filter(product => {
        const title = product.title.toLowerCase();
        const searchedTitle = searchField.toLowerCase();
        return title.includes(searchedTitle);
    })

    return (
        <>
            <div className={styles.container}>
                <input 
                    type="text" 
                    name="serachText" 
                    placeholder='Search...' 
                    value={searchField}
                    onChange={handleChange}
                />
                <div>
                    <img src={searchIcon} alt="searchALT" />
                </div>
            </div>

            {/* search field */}
            <div className={determineClass()}>
                <button className={styles.fieldBtn} onClick={handleBtn}>X</button>
                {filteredProd.length
                    ? filteredProd.map(product => <Product productData={product} key={uuid.v4()} />)
                    : <p className={styles.notfound}>NOT FOUND</p>
                }
            </div>
        </>
    );
};

export default SearchBar;