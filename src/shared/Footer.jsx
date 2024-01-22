import React, {useState} from 'react';

// Styles
import styles from './Footer.module.css';


const Footer = () => {
    const [showLinks , setShowLinks] = useState(false);

    const handleBtn = () => {
        setShowLinks(!showLinks);
    }

    return (
        <div className={styles.container}>
            <p className={showLinks ? styles.textAnim : styles.textAnimIntro}>Made with <span>&#10084;</span> by <button onClick={handleBtn} className={styles.btn}>Amir M. Amani</button></p>
            <h3 className={showLinks ? "" : styles.hidden}>{':'}</h3>
            <div className={showLinks ? styles.links : styles.hidden}>
                <a className={styles.ig} href='https://instagram.com/amir.mmd.amani' target='_blank'>Instagram</a>
                <a className={styles.tg} href='https://t.me/amir_m_amani' target='_blank'>Telegram</a>
            </div>

        </div>
    );
};

export default Footer;