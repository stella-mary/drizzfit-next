import React, { useState } from "react";
import styles from "@/styles/PlaceOrderNavbar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import PlaceOrderPage from "../Shop/PlaceOrder";
import PlaceOrderClosePopup from "./PlaceOrderClosePopup";

const PlaceOrderNavbar = ({ closeDialog }) => {

    // const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [iscloseNo, setIsCloseNo] = useState(false);

    const openNo = () => {
        setIsCloseNo(true);
    };

    const closeNo = () => {
        setIsCloseNo(false); // This will set iscloseNo to false
    }

    return (
        <div className={styles.PlaceOrderNavbar}>
            <div className={styles.orderContainer1}></div>
            <div className={styles.PlaceOrderClose}>
                <div
                    className={styles.closeButton}
                    onClick={() => {
                        // closeDialog();
                        openNo();
                    }}
                >
                    <CloseIcon />
                </div>
                {iscloseNo && (
                    <div className={styles.dialogContainer}>
                        <div className={styles.dialogContainer1}>
                            <div className={styles.dialogContent}>
                                <PlaceOrderClosePopup closeNo={closeNo} closeDialog={closeDialog} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlaceOrderNavbar;