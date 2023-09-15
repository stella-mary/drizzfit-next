import styles from "@/styles/PlaceOrderSummary.module.css";
import React, { useEffect, useState, useRef } from "react";


const PlaceOrderSummary = () => {
    return (
        <div className={styles.BuyDetailsMain}>
            <div className={styles.imageContainer7}></div>
            <div className={styles.BuyName}>
                <div className={styles.BuyNameMain}>
                    Menstrual Cap - Large
                    Price: $445
                    Quantity: 3
                </div>
            </div>
        </div>

    )
}

export default PlaceOrderSummary
