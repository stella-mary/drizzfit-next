import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "@/styles/PlaceOrderAddress.module.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import EastIcon from "@mui/icons-material/East";

const PlaceOrderAddress = ({ mobileNumber, handleClick, goToStep1 }) => {

    const handleContinue = () => {
        handleClick();
    }

    return (
        <div>
            <div className={styles.placeOrderAddress}> Edit Address</div>
            <div><span className={styles.bgcolor}>{mobileNumber} <BorderColorIcon fontSize="16px" cursor="pointer" onClick={goToStep1} /></span></div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, overflowX: 'auto', height: '150px' }}>
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
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="home" control={<Radio />} label="Home" />
                                <FormControlLabel value="work" control={<Radio />} label="Work" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={styles.placeOrderAddress}>Shipping method</div>
                    <FormControl>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="freeshipping" control={<Radio />} label="Free Shipping @ #10" />

                        </RadioGroup>
                    </FormControl>

                </div>
            </div>
            <div className={styles.PlaceOrderFooter}>
                <div className={styles.PlaceOrderButton} onClick={handleContinue}>
                    Continue
                    <span className={styles.space} />
                    <EastIcon />
                </div>
            </div>


        </div >
    )
}

export default PlaceOrderAddress
