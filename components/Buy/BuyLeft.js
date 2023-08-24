import React from 'react'
import styles from "@/styles/BuyLeft.module.css"

const BuyLeft = () => {
    return (

        <div className={styles.buyLeft}>
            <div className={styles.para}>
                Returning customer? <span className={styles.paraColor}>Click here to login</span>
            </div>
            <div className={styles.para1}>
                Have a coupon? <span className={styles.paraColor}>Click here to enter your code</span>
            </div>

        </div>
    )
}

export default BuyLeft
