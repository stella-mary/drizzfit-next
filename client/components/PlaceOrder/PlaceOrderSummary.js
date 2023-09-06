import React from 'react'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import styles from "@/styles/PlaceOrderSummary.module.css";


const PlaceOrderSummary = ({ onClose }) => {

    return (
        <div className={styles.PlaceOrderSummary}>
            <DialogActions
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between', // Adjust alignment as needed
                    alignItems: 'center', // Adjust alignment as needed
                }}
            >
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
                    <ClearIcon />
                </Button>
            </DialogActions>
            ordersummary
        </div>
    )
}

export default PlaceOrderSummary
