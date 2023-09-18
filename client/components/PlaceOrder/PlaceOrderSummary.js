import styles from "@/styles/PlaceOrderSummary.module.css";
import React, { useEffect, useState, useRef } from "react";


const PlaceOrderSummary = () => {
    return (
        <div className={styles.BuyDetailsMain}>
            <div className={styles.imageContainer7}></div>
            <div className={styles.BuyName}>
                <div className={styles.BuyNameMain}>
                    <div className={styles.h1}>Menstrual Cap - Large</div>
                    <div className={styles.para}>Price: $445</div>
                    <div className={styles.para}>Quantity: 3</div>
                </div>
            </div>
        </div>

    )
}

export default PlaceOrderSummary
