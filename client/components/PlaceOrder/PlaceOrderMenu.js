import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import axios from "axios";
import React, { useState } from "react";
import styles from "@/styles/PlaceOrderMenu.module.css";
import PlaceOrderStepper from './PlaceOrderStepper'
import PlaceOrderSummary from './PlaceOrderSummary';
import PlaceOrderFooter from './PlaceOrderFooter';
import PlaceOrderMobile from './PlaceOrderMobile';

export default function PlaceOrderMenu({ open, onClose, orderId, openDialog }) {
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('md'); // Set the initial maxWidth to 'md'

    const handleMaxWidthChange = (event) => {
        setMaxWidth(event.target.value);
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={onClose}
        >
            <div className={styles.PlaceOrderMenu}>
                <div className={styles.imageContainer}></div>
                <PlaceOrderSummary />
            </div>
            <PlaceOrderStepper />
            <div className={styles.PlaceOrderSub}>
                <PlaceOrderMobile />
            </div>
            <PlaceOrderFooter />
        </Dialog>


    );
}
