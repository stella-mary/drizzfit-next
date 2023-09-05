import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import axios from "axios";
import React, { useState } from "react";
import styles from "@/styles/PlaceOrderMenu.module.css";
import CloseIcon from '@mui/icons-material/Close';

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
        <div className={styles.shop}>
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
                            borderRadius: '50%',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            paddingLeft: '5px',
                            paddingRight: '5px',
                            color: 'white',
                        }}
                    >
                        <CloseIcon />
                    </Button>
                </DialogActions>
                <DialogTitle>Optional sizes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can set my maximum width and whether to adapt or not.
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <FormControl sx={{ mt: 10, minWidth: 120 }}>

                        </FormControl>
                        {/* <FormControlLabel
                            sx={{ mt: 1 }}
                            control={
                                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
                            }
                            label="Full width"
                        /> */}
                    </Box>
                </DialogContent>

            </Dialog>
        </div>
    );
}
