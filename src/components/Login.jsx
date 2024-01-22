import React from 'react';

// Icons
import google from '../assets/google_4.svg'

// Styles
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to ChatDemo WebApp</h2>

                <div className={styles.button}>
                    <img src={google} alt="googleIcon" />
                    <p>Sign in with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;