import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import styles from "@/styles/PlaceOrderMobile.module.css";

const PlaceOrderMobile = () => {
    return (
        <div className={styles.PlaceOrderMobile}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body">
                    Enter Mobile Number:
                </Typography>
                <TextField
                    fullWidth
                    defaultValue="+91 | "
                    inputProps={{
                        maxLength: 18, // Including "+91 | "
                    }}
                // value={phoneNumber}
                // onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </Box>

        </div>
    )
}

export default PlaceOrderMobile
