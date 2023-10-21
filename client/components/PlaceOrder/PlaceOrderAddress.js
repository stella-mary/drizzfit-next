import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "@/styles/PlaceOrderAddress.module.css";

import BorderColorIcon from '@mui/icons-material/BorderColor';

const PlaceOrderAddress = ({ mobileNumber }) => {


    return (
        <div>
            <div className={styles.placeOrderAddress}>Edit Address</div>
            <div><span className={styles.bgcolor}>{mobileNumber} <BorderColorIcon fontSize="10px" /></span></div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, overflowX: 'auto', height: '200px' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '42ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Pincode" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '20ch' },
                            display: "flex",
                        }}
                        noValidate
                        autoComplete="off"

                    >
                        <TextField id="outlined-basic" label="City" variant="outlined" />
                        <TextField id="outlined-basic" label="State" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '42ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '42ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '42ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Full Address" variant="outlined" />
                    </Box>
                    <div className='placeOrderAddressMain'>
                        <div className={styles.placeOrderAddress}>Address Type</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderAddress
