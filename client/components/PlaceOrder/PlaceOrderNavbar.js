import React from "react";
import styles from "@/styles/PlaceOrderNavbar.module.css";
import CloseIcon from "@mui/icons-material/Close";

const PlaceOrderNavbar = ({ closeDialog }) => {
    return (
        <div className={styles.PlaceOrderNavbar}>
            <div className={styles.orderContainer1}></div>
            <div className={styles.PlaceOrderClose}>
                <div className={styles.closeButton} onClick={closeDialog}>
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
};

export default PlaceOrderNavbar;