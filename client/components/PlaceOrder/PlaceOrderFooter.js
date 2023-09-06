import React from 'react';
import styles from '@/styles/PlaceOrderFooter.module.css';
import EastIcon from '@mui/icons-material/East';

const PlaceOrderFooter = () => {
    return (
        <div className={styles.PlaceOrderFooter}>
            <div className={styles.Button} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                Continue <EastIcon />
            </div>
        </div>
    );
};

export default PlaceOrderFooter;
