import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/BuySummary.module.css";


const BuySummary = () => {

    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [finalQuantity, setFinalQuantity] = useState(selectedQuantity);


    return (
        <div>
            <div className={styles.BuySummary}>
                <div className={styles.BuySummaryMain}>
                    <div className={styles.BuySummarySub}>
                        SUBTOTAL
                    </div>
                    <div className={styles.BuySummarySubSub}>
                        ₹ {selectedQuantity * selectedProduct.price}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BuySummary
