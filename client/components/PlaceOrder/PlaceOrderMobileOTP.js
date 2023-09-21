import React from 'react'
import styles from "@/styles/PlaceOrderMobileOTP.module.css";

const PlaceOrderMobileOTP = () => {

    return (
        <div className={styles.PlaceOrderMobileOTP}>
            <div className={styles.h1}>Verify Mobile Number</div>
            <div className={styles.para}>To Use Your Saved Address, Enter the OTP Sent to</div>
            <div className={styles.center}>+91- 93449 41067</div>
            <div className={styles.boxnote}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
            <div className={styles.center1}>Resend OTP in </div>
        </div>
    )
}

export default PlaceOrderMobileOTP;
