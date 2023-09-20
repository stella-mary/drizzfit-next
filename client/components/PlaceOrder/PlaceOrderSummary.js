import styles from "@/styles/PlaceOrderSummary.module.css";
import React, { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const PlaceOrderSummary = ({ productName, productDescription, selectedQuantity, productPrice, subtotal }) => {
    console.log("quantity received in placeordersummary" + selectedQuantity)

    const topay = subtotal + 100;

    const [isContentVisible, setContentVisible] = useState(true);

    const toggleContent = () => {
        setContentVisible(!isContentVisible);
    };

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to open the dialog
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    // Function to close the dialog
    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className={styles.PlaceOrderSummaryHead} >
            <div className={styles.h1}>
                <AddShoppingCartIcon style={{ verticalAlign: 'middle' }} />
                <span className={styles.space} />Order Summary<span className={styles.space} />
                {isContentVisible ? (
                    <KeyboardArrowUpIcon onClick={toggleContent} style={{ verticalAlign: 'middle', cursor: 'pointer' }} />
                ) : (
                    <KeyboardArrowDownIcon onClick={toggleContent} style={{ verticalAlign: 'middle', cursor: 'pointer' }} />
                )}
            </div>
            {
                isContentVisible && (
                    <div>
                        <div className={styles.PlaceOrderSummary}>
                            <div className={styles.imageContainer7}></div>
                            <div className={styles.PlaceOrderSummaryMain}>
                                <div className={styles.PlaceOrderSummarySub}>
                                    <div className={styles.h2}>{productName} - {productDescription}</div>
                                    <div className={styles.para}>Price: {productPrice}</div>
                                    <div className={styles.para}>Quantity: {selectedQuantity}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.PlaceOrderSummaryTable}>
                            <div className={styles.PlaceOrderSummaryTable1}>
                                <div className={styles.thead}>Subtotal</div>
                                <div className={styles.thead}>₹ {subtotal}</div>
                            </div>
                            <div className={styles.PlaceOrderSummaryTable1}>
                                <div className={styles.thead}>Shipping</div>
                                <div className={styles.thead}>₹ 100</div>
                            </div>
                            <div className={styles.border}></div>
                            <div className={styles.PlaceOrderSummaryTable1}>
                                <div className={styles.thead1}>To Pay</div>
                                <div className={styles.thead1}>₹ {topay}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default PlaceOrderSummary;
