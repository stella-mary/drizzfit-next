import styles from "@/styles/PlaceOrderSummary.module.css";
import React, { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PlaceOrderSummary = () => {
    const [isContentVisible, setContentVisible] = useState(true);

    const toggleContent = () => {
        setContentVisible(!isContentVisible);
    };

    return (
        <div className={styles.PlaceOrderSummaryHead}>
            <div className={styles.h1}>
                <AddShoppingCartIcon style={{ verticalAlign: 'middle' }} />
                <span className={styles.space} />Order Summary<span className={styles.space} />
                {isContentVisible ? (
                    <KeyboardArrowUpIcon onClick={toggleContent} style={{ verticalAlign: 'middle', cursor: 'pointer' }} />
                ) : (
                    <KeyboardArrowDownIcon onClick={toggleContent} style={{ verticalAlign: 'middle', cursor: 'pointer' }} />
                )}
            </div>
            {isContentVisible && (
                <div>
                    <div className={styles.PlaceOrderSummary}>
                        <div className={styles.imageContainer7}></div>
                        <div className={styles.PlaceOrderSummaryMain}>
                            <div className={styles.PlaceOrderSummarySub}>
                                <div className={styles.h2}>Menstrual Cap - Large</div>
                                <div className={styles.para}>Price: $445</div>
                                <div className={styles.para}>Quantity: 3</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.PlaceOrderSummaryTable}>
                        <div className={styles.PlaceOrderSummaryTable1}>
                            <div className={styles.thead}>Subtotal</div>
                            <div className={styles.thead}>₹</div>
                        </div>
                        <div className={styles.PlaceOrderSummaryTable1}>
                            <div className={styles.thead}>Shipping</div>
                            <div className={styles.thead}>Free</div>
                        </div>
                        <div className={styles.border}></div>
                        <div className={styles.PlaceOrderSummaryTable1}>
                            <div className={styles.thead1}>To Pay</div>
                            <div className={styles.thead1}>₹</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlaceOrderSummary;
