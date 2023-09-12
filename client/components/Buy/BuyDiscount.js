import React from 'react'
import styles from "@/styles/BuyDiscount.module.css";


const BuyHead = () => {
    return (
        <div>
            <div className={styles.BuyDiscount}>
                <input
                    className={styles.custominput}
                    type="text"
                    placeholder="e.g. Discount Code"
                />
                <div className={styles.BuyDiscountButton}>
                    Apply
                </div>
            </div>

        </div>
    )
}

export default BuyHead
