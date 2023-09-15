import React from 'react';
import styles from "@/styles/PlaceOrderStepper.module.css";

const PlaceOrderStepper = () => {
    return (
        <div className={styles["place-order-stepper"]}>
            <div className={`${styles.step} ${styles.active}`}><span className={styles.bgcolor}>1</span><span className={styles.space}></span>Mobile</div>
            <div className={styles.step}><span className={styles.bgcolor}>2</span><span className={styles.space}></span>Address</div>
            <div className={styles.step}><span className={styles.bgcolor}>3</span><span className={styles.space}></span>Payment</div>
        </div>
    )
};

export default PlaceOrderStepper;
