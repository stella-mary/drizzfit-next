import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import React, { useState } from "react";
import styles from "@/styles/PlaceOrderMenu.module.css";
import CloseIcon from '@mui/icons-material/Close';
import PlaceOrderStepper from './PlaceOrderStepper'
import PlaceOrderSummary from './PlaceOrderSummary';


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
        <div className={styles.PlaceOrderMenu}>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={onClose}
            >
                <DialogActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between', // Adjust alignment as needed
                        alignItems: 'center', // Adjust alignment as needed
                    }}
                >
                    <div className={styles.imageContainer}>
                    </div>
                    <Button
                        onClick={onClose}
                        style={{
                            backgroundColor: '#dddddd',
                            cursor: 'pointer',
                            borderRadius: '50%', // Set border radius to 50% for a circular shape
                            width: '30px', // Set a fixed width and height for the circular button
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                        }}
                    >
                        <CloseIcon />
                    </Button>
                </DialogActions>
                <PlaceOrderStepper />
                <PlaceOrderSummary />


            </Dialog>

        </div>
    );
}
