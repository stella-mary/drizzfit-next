import React from 'react';
import styles from '@/styles/PlaceOrderFooter.module.css';
import EastIcon from '@mui/icons-material/East';

const PlaceOrderFooter = () => {
    return (
        <div className={styles.PlaceOrderFooter}>
            <div className={styles.PlaceOrderButton}>Continue</div>
        </div>
    );
};

export default PlaceOrderFooter;
