import React from 'react';
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
                            width: '100%',
                            borderRadius: '20px',
                            borderColor: '#f0775a'
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'black'
                        },
                    }}
                />
            </div>
            <div className={styles.PlaceOrderNote}>
                <label className="checkboxLabel">
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        className={styles.checkboxInput}
                    />
                    Notify me for orders, updates & offers
                </label>
            </div>
        </div>
    )
}

export default PlaceOrderMobile
