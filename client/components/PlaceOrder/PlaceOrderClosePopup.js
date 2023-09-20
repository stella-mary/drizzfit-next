import React from 'react'
import styles from "@/styles/PlaceOrderClosePopup.module.css";

const PlaceOrderClosePopup = ({ closeNo, closeDialog }) => {

    return (
        <div>
            <div className={styles.para}>Products in huge demand<br />might run <span className={styles.bgcolor}> Out of Stock</span></div>
            <div className={styles.para}>Are you sure you want to cancel payment?</div>
            <div className={styles.table}>
                <div className={styles.thead} onClick={() => { closeDialog() }}>Yes</div>
                <div className={styles.thead} onClick={() => { closeNo() }}>No</div>
            </div>
        </div>
    )
}

export default PlaceOrderClosePopup
