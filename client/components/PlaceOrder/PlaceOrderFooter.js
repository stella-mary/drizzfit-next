import React, { useEffect, useState, useRef } from "react";
import styles from '@/styles/PlaceOrderFooter.module.css';
import EastIcon from '@mui/icons-material/East';
import PlaceOrderMobileOTP from '@/components/PlaceOrder/PlaceOrderMobileOTP'

const PlaceOrderFooter = () => {



    return (
        <div className={styles.PlaceOrderFooter}>
            <div className={styles.PlaceOrderButton}>Continue</div>
        </div>
    );
};

export default PlaceOrderFooter;
