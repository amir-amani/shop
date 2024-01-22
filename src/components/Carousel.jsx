import React, {useState, useEffect} from 'react';
import * as uuid from 'uuid';

// Components
import Product from '../shared/Product';

// Styles
import styles from './Carousel.module.css';

const Carousel = ({products}) => {

    const [newProd , setNewProd] = useState([]);
    const [toRightClicked , setToRightClicked] = useState(false);
    const [toLeftClicked , setToLeftClicked] = useState(false);

    useEffect(() => {
        setNewProd(products);
        
    }, [products, newProd]);

    const goRight = () => {
        setToRightClicked(false);
        setToLeftClicked(true);
        const lastItme = newProd[newProd.length - 1];
        setNewProd(prevState => {
            prevState.pop();
            prevState.unshift(lastItme);
            return [...prevState];
        });
    }

    const goLeft= () => {
        setToLeftClicked(false);
        setToRightClicked(true);
        const firstItme = newProd[0];
        setNewProd(prevState => {
            prevState.shift();
            prevState.push(firstItme);
            return [...prevState];
        });
    }


    const determineAnimation = (prod) => {

        //this whol part is useless but im using it anyway since i already wrote it
        //change it in the future if you want. CHECK THE CSS

        const moreThanFour = newProd.length > 4 ? true : false;
        if(!moreThanFour){
            if(toRightClicked){
                if(newProd.indexOf(prod) == newProd.length - 1){
                    return styles.goLeft;
                } else {
                    return styles.general;
                }
            } else if(toLeftClicked){
                if(newProd.indexOf(prod) == 0){
                    return styles.goRight;
                } else {
                    return styles.general;
                }
            } 
        } else {
            if(toRightClicked){
                if(newProd.indexOf(prod) == 4){
                    return styles.goLeft;
                } else {
                    return styles.general;
                }
            } else if(toLeftClicked){
                if(newProd.indexOf(prod) == 1){
                    return styles.goRight;
                } else {
                    return styles.general;
                }
            } 
        }
    }
    return (
        <div className={styles.category}>
            <button className={styles.toLeft} onClick={() => goRight()}>{`<`}</button>
            <button className={styles.toRight} onClick={() => goLeft()}>{`>`}</button>

            <div className={styles.carouselContainer}>
                {newProd.map(prod => (
                    <div key={uuid.v4()} className={determineAnimation(prod)}>
                        <Product key={uuid.v4()} productData={prod} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Carousel;