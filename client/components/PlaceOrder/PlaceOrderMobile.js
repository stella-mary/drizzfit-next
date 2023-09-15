import React from 'react'
import styles from "@/styles/PlaceOrderMobile.module.css";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';

const PlaceOrderMobile = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <div className={styles.PlaceOrderMobile}>Enter Mobile Number</div>
            <div className={styles.PlaceOrderText}>
                <TextField
                    defaultValue="+91 | "
                    inputProps={{
                        maxLength: 18, // Including "+91 | "
                        style: {
                            color: 'red',
                            width: '100%',
                            borderRadius: '20px'
                        },
                    }}
                />
            </div>
            <div className={styles.PlaceOrderNote}><Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            /> Notify me for orders, updates & offers</div>
        </div>
    )
}

export default PlaceOrderMobile
