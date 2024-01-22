import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../context/CartContextProvider';


//Components
import SearchBar from './SearchBar';

//Styles
import styles from './Navbar.module.css';

//img
import cartPic from '../assets/cart.svg';
import homePic from '../assets/home.svg';

const Navbar = () => {
    const {state} = useContext(CartContext);

        return (
        <div>
            <div className={styles.container}>

                <Link to='/' className={styles.homeContainer}>
                    <img src={homePic} alt="homeSvgAlt" />
                    <p>Home</p>
                </Link>

                <SearchBar />

                <Link to='/cart' className={styles.cartContainer}>
                        <div className={styles.cartIMG}>
                            <img src={cartPic} alt="cardAlt" />
                            <div className={styles.counter}>
                                {state.itemsCount}
                            </div>
                        </div>
                    
                </Link>
            </div>
        </div>
    );
};

export default Navbar;