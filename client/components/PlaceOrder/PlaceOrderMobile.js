import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import styles from "@/styles/PlaceOrderMobile.module.css";

const PlaceOrderMobile = () => {
    return (
        <div className={styles.PlaceOrderMobile}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    marginTop: '20px'
                }}
            >
                <Typography variant="body"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        fontFamily: "'Telegraf UltraBold 800', sans-serif",
                    }}>
                    Enter Mobile Number:
                </Typography>
                <TextField
                    fullWidth
                    defaultValue="+91 | "
                    inputProps={{
                        maxLength: 18, // Including "+91 | "
                    }}
                    sx={{
                        marginTop: '18px',
                        fontFamily: "'Telegraf UltraBold 800', sans-serif",
                    }}
                />
                <Typography
                    sx={{
                        fontSize: '12px',
                        fontFamily: "'Telegraf Regular 400', sans-serif",
                    }}>Notify me for orders, updates & offers</Typography>
            </Box>
        </div>
    );
}

export default PlaceOrderMobile;
