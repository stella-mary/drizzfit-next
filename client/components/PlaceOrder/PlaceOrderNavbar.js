import React, { useState } from "react";
import styles from "@/styles/PlaceOrderNavbar.module.css";
import CloseIcon from "@mui/icons-material/Close";

const PlaceOrderNavbar = () => {

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
        <div className={styles.PlaceOrderNavbar}>
            <div className={styles.orderContainer1}></div>
            <div className={styles.PlaceOrderClose}>
                <div className={styles.closeButton} >
                    <CloseIcon onClick={closeDialog} />
                </div>
            </div>
        </div>
    );
};

export default PlaceOrderNavbar;
