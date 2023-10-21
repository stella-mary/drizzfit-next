import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "@/styles/PlaceOrderAddress.module.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';


const PlaceOrderAddress = ({ mobileNumber }) => {
    return (
        <div>
            Edit Address
            <h1><span className={styles.bgcolor}>{mobileNumber} <BorderColorIcon fontSize="16px" /></span></h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
            Pincode
            City
            State
            Full Name
        </div>
    )
}

export default PlaceOrderAddress
