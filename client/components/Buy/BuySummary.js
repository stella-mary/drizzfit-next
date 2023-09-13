import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/BuySummary.module.css";

const BuySummary = ({ subtotal }) => {

    return (
        <div className={styles.BuySummary}>
            <div className={styles.borderbottom}>&#160;</div>
            <div className={styles.BuySummaryMain}>
                <div className={styles.BuySummarySub}>
                    SUBTOTAL
                </div>
                <div className={styles.BuySummarySubSub}>
                    ₹ {subtotal}
                </div>
            </div>
        </div>
    )
}

export default BuySummary
